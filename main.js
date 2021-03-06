'use strict'

var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')
var os = require('os')

var GoogleCompiler = require('google-closure-compiler').compiler
var semverCompare = require('semver-compare')
var tools = require('a-toolbox')

var javaMinVersion = '1.7'

// absolute path the compiler jar
// console.log(GoogleCompiler.COMPILER_PATH)
// absolute path the contrib folder which contains
// console.log(GoogleCompiler.CONTRIB_PATH)

/**
 * default output: single string
 *
 * @param {object} prm
 * @param {boolean} [prm.verbose=false] enable verbose mode
 * @param {boolean} [prm.checkJava=false] check java installation and required version
 * @param {object} prm.input
 * @param {Compile.mode} prm.input.mode input mode: file(s) or string(s)
 * @param {Array|object|string} prm.input.list array of file(s) or string(s), or object of strings, or single string
 * @param {object} prm.output
 * @param {Compile.mode} [prm.output.mode=Compile.mode.STRING] output mode: file(s) or string(s)
 * @param {Array|object} [prm.output.list] array of file(s) or string(s), if not declared will be use fileMask
 * @param {Compile.way} [prm.output.way=Compile.output.SINGLE] output way, single or multiple; multiple output need multiple input
 * @param {string} [prm.output.fileMask={name}.min.js] will apply mask to output file from input file
 * @param {object} prm.options @see options.js @see https://developers.google.com/closure/compiler/docs/api-ref
 * @param {function(err,data,response)} prm.callback
 *    err Error or null
 *    data contains output string(s) as single string or object
 *    response contains {stderr:string,errors:number,warnings:number}
 *
 * @todo stop on first error on multi input or output
 * @todo set multiple compiler runner limit (default 2 or 3)
 * @todo coverage
 * @todo use stdin for input = string? do benchmarks
 */
var Compile = function (prm) {
  /**
   * check params
   * @returns {boolean}
   */
  var __check = function () {
    return !(!prm || !prm.input || !prm.input.mode ||
    !prm.input.list || (prm.input.list instanceof Array && prm.input.list.length < 1) ||
    !prm.output || !prm.output.mode)
  }

  var __log = function () {
    if (!prm.verbose) return
    var _args = Array.prototype.slice.call(arguments)
    console.log.apply(console, _args)
  }

  var __main = function () {
    // / set defualt data
    if (!prm.output.mode) prm.output.mode = Compile.mode.STRING
    if (!prm.output.way) prm.output.way = Compile.output.SINGLE
    if (!prm.output.fileMask) prm.output.fileMask = '{name}.min.js'

    if (!__check()) {
      prm.callback && prm.callback(new Error('invalid params'))
      return
    }

    if (typeof prm.input.list === 'string') prm.input.list = [prm.input.list]

    // / if output way is multi but there is only a single input
    // / then output way will be single
    if (prm.output.way === Compile.output.MULTI && (
      prm.input.list instanceof Array && prm.input.list.length < 2 ||
      tools.object.getKeys(prm.input.list).length < 2)) {
      prm.output.way = Compile.output.SINGLE
    }

    __java(function (err, version) {
      if(!prm.checkJava) {
        if (err || !version) {
          prm.callback && prm.callback(new Error("java is not installed or can't detect version" +
            '; run \njava -version\n for details'))
          return
        }
        __log('java detected, version', version)
  
        // / check java version >= javaMinVersion
        if (semverCompare(version, javaMinVersion) < 0) {
          prm.callback && prm.callback(new Error('java installed, version ' + version + ' not enough, required >= ' + javaMinVersion +
            '; run \njava -version\n for details'))
          return
        }
      }

      var _run = function () {
        if (prm.output.way === Compile.output.SINGLE) {
          // / single output
          __log('single output')

          __compile({
            i: 0,
            input: prm.input,
            output: prm.output,
            options: prm.options,
            callback: prm.callback
          })
        } else {
          // / multiple output
          __log('single output')

          var _err = null
          var _output = {}
          var i

          // / setup tasks
          var _tasks = new tools.Tasks(function () {
            prm.callback && prm.callback(_err, _output)
          })

          // / compile each input
          var _compile = function (i) {
            __compile({
              i: i,
              input: prm.input,
              output: prm.output,
              options: prm.options,
              callback: function (err, out) {
                if (err) {
                  _err = err
                }
                if (prm.output.mode === Compile.mode.STRING) {
                  _output[prm.output.list[i]] = out
                }
                _tasks.done('#' + i)
              }
            })
          }

          // / launch compile's tasks
          for (i in prm.input.list) {
            _tasks.todo('#' + i)
          }
          for (i in prm.input.list) {
            _compile(i)
          }
        }
      }

      // / if input is string, either single or multi, move to file
      if (prm.input.mode === Compile.mode.STRING) {
        __adjustInputStrings(function (err) {
          if (err) {
            prm.callback && prm.callback(new Error('error writing temp files', err))
            return
          }
          _run()
        })
      } else {
        _run()
      }
    })
  }

  /**
   */
  var __compile = function (prm) {
    __log('compile #' + prm.i, '...')
    // / setup compiler
    var _options = tools.object.clone(prm.options)
    var _i = prm.i
    var _input = tools.object.clone(prm.input)
    var _output = tools.object.clone(prm.output)
    var _callback = prm.callback

    // / input mode: single or multi file
    if (_output.way === Compile.output.SINGLE) {
      _options.js = _input.list
    } else {
      _options.js = _input.list[_i]
    }

    // / output mode : single file, let do by compiler
    if (_output.mode === Compile.mode.FILE) {
      _options.js_output_file = __outputFilename(_input, _output, _i)
    }

    __log('compile #' + prm.i, 'start, options', _options)

    var _compiler = new GoogleCompiler(_options)
    var _process = _compiler.run(function (exitcode, stdout, stderr) {
      __log('compile #' + prm.i, 'done')
      __log('ouput for compile #' + prm.i, 'stdout', stdout, 'stderr', stderr)

      // / return error
      if (stderr) {
        // parse content
        var _response = __parseCompilerStderr(stderr)
        if (_response.errors > 0) {
          _callback && _callback(new Error(stderr))
        } else {
          _callback && _callback(null, stdout, _response)
        }
      } else {
        // / return stdout: if output si string, will contains compiled
        // / if output is file, will contains nothing
        _callback && _callback(null, stdout)
      }
    })
    _process.stderr.on('data', function (data) {
      // @todo check performance if input = string then _process.stdin.write()
      if (data.toString('utf8').indexOf('The compiler is waiting for input via stdin') !== -1) {
        _process.kill()
      }
    })
  }

  var __parseCompilerStderr = function (stderr) {
    var _return = {errors: 1, stderr: stderr}
    try {
      var _lines = stderr.split('\n')
      var _last = _lines[_lines.length - 2]
      var _response = _last.match(/([\d]+)\s+error\(s\)\,\s+([\d]+)\s+warning\(s\)/)
      if (_response) {
        _return.errors = _response[1]
        _return.warnings = _response[2]
      }
    } catch (exc) {}
    return _return
  }

  /**
   * write input strings to temp files
   * @param {function(err)} callback
   */
  var __adjustInputStrings = function (callback) {
    var _err = null
    var _inputList = []
    var _outputList = null
    var j = 0
    var i

    var _tasks = new tools.Tasks(function () {
      prm.input.list = _inputList
      if (_outputList && !prm.output.list) {
        prm.output.list = _outputList
      }
      callback(_err)
    })

    var _write = function (i) {
      var _file = os.tmpdir() + '/' + tools.random.hex()
      _inputList.push(_file)
      __log('write file', _file, '#' + i)
      fs.writeFile(_file, prm.input.list[i], function (err) {
        if (err) _err = err
        __log('wrote file', _file, '#' + i)
        _tasks.done('#' + i)
      })
    }

    if (prm.input.list instanceof Array) {
      for (i = 0; i < prm.input.list.length; i++) {
        _tasks.todo('#' + i)
      }
      for (i = 0; i < prm.input.list.length; i++) {
        _write(i)
      }
    } else {
      _outputList = {}
      for (i in prm.input.list) {
        _tasks.todo('#' + i)
      }
      for (i in prm.input.list) {
        _outputList[j] = i
        _write(i)
        j++
      }
    }
  }

  var __outputFilename = function (input, output, i) {
    var _outputFile, _maskData
    if (!output.list || output.list instanceof Array) {
      if (output.list && output.list[i]) {
        _outputFile = output.list[i]
      } else {
        // / compose masked output
        _maskData = {
          name: input.list[i]
            ? path.basename(input.list[i], path.extname(input.list[i]))
            : 'compiled' + i
        }
        _outputFile = tools.string.template(output.fileMask, _maskData)
      }
    } else {
      _maskData = {
        name: output.list[i]
          ? output.list[i]
          : 'compiled' + i
      }
      _outputFile = tools.string.template(output.fileMask, _maskData)
    }

    __log('set output filename', _outputFile, 'from',
      'input.list', input.list[i], 'output.list', output.list ? output.list[i] : null,
      'output.fileMask', output.fileMask)

    return _outputFile
  }

  /**
   * detect java version
   * @see http://stackoverflow.com/questions/19734477/verify-if-java-is-installed-from-node-js
   * @param {function(err,version)} callback
   */
  var __java = function (callback) {
    // / check java version
    if(!prm.checkJava) {
      return callback(null, javaMinVersion)
    }
    
    __log('get java version detected')
    var _spawn = spawn('java', ['-version'])
    _spawn.on('error', function (err) {
      return callback(err, null)
    })

    var _data = ''
    _spawn.stderr.on('data', function (data) {
      _data += data
    })
    _spawn.stderr.on('end', function (data) {
      _data = _data.toString().split('\n')[0]
      var _version = new RegExp('java version').test(_data) ? _data.split(' ')[2].replace(/"/g, '') : false
      return callback(null, _version !== false ? _version : null)
    })
  }

  __main()
}

/**
 * tool for generate documentation file options.js
 * run $java -jar node_modules/google-closure-compiler/compiler.jar --help
 */
Compile.options = function () {
  var _spawn = spawn('java', ['-jar', GoogleCompiler.COMPILER_PATH, '--help'])
  var _err = ''
  var _out = ''

  _spawn.on('error', function (err) {
    console.log('error', err)
  })

  _spawn.stderr.on('data', function (data) {
    _err += data
  })
  _spawn.stderr.on('end', function (data) {
    // console.log('error', _err)
  })

  _spawn.stdout.on('data', function (data) {
    _out += data
  })
  _spawn.stdout.on('end', function (data) {
    // console.log('out', _out)
    _parse()
  })

  var _parse = function () {
    var _lines = _out.split('\n')
    var _options = {}

    for (var i in _lines) {
      var _line = _lines[i]
      var _key, _parts

      // try {
      if (_line.indexOf(' --') === 0) {
        _parts = _line.match(/\s--([\w\_-]+)\s(\([,-\s\w]+\))*\s*([\w\[\]\s\_-|]+)*\s*:\s([^\n]+)/i)
        if (_parts) {
          _key = _parts[1]
          _options[_key] = {
            value: _parts[3] ? _parts[3].trim() : '',
            description: _parts[4] ? _parts[4].trim() : ''
          // short: _parts[2] ? tools.string.trim(_parts[2], ['() ']) : ''
          }
        } else {
          console.error('ERROR REGEXP MATCH', _line)
        }
      } else {
        _parts = _line.split(' : ')
        if (_parts[1]) {
          _options[_key].value += _parts[0].trim()
          _options[_key].description += '\n\t//' + _parts[1].trim()
        } else {
          _options[_key].description += '\n\t//' + _parts[0].trim()
        }
      }
    //      } catch (exc) {
    //        console.error('error on line', _line)
    //      }
    }
    // console.log(_options)
    // write file
    var _output = []
    for (i in _options) {
      var _opt = _options[i]
      _output.push('\t// ' + _opt.description + '\n' +
        '\t' + i + ': ' + (_opt.value ? _opt.value : 'true'))
    }

    fs.writeFile('./options.js', 'var options = {\n' + _output.join(',\n') + '\n}\n', function (err) {
      if (err) {
        console.error(err)
      }
    })
  }
}

Compile.mode = {
  FILE: 1,
  STRING: 2
}

Compile.output = {
  MULTI: 1,
  SINGLE: 2
}

module.exports = Compile
