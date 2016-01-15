'use strict'

var tools = require('a-toolbox')

var Compile = require('./main')

//Compile.options()
//return

// test

var _tasks = new tools.Tasks(function () {
  process.exit(0)
}, {chrono: true})

var _jsCode0 = 'function x() {var a = 4; b = 5; var c = a+b; return c}; x(6)'
var _jsCode1 = 'var b = 1 + 2'
var _jsCode2 = 'var c = 4-5'

var options = {
  compilation_level: 'SIMPLE',
  language_in: 'ECMASCRIPT5'
}

var _callback = function (tag, log) {
  return function (err, out) {
    if (err) {
      console.error(err)
      return
    }
    //    console.log(out)
    var _chrono = _tasks.done(tag).chrono
    console.log('complete', tag, 'in', _chrono, 'ms')
    if (log) console.log(out)
  }
}

// single file to single string
_tasks.todo('single-file-to-single-string')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./test.js']
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.SINGLE
  },
  options: options,
  callback: _callback('single-file-to-single-string')
})

// single file to single file
_tasks.todo('single-file-to-single-file')
Compile({
  verbose: true,
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js']
  },
  output: {
    mode: Compile.mode.FILE,
    list: ['./output/sf2sf-main.min.js'],
    way: Compile.output.SINGLE
  },
  options: options,
  callback: _callback('single-file-to-single-file')
})

// single file to multi string (> single string)
_tasks.todo('single-file-to-multi-string')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js']
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.MULTI
  },
  options: options,
  callback: _callback('single-file-to-multi-string')
})

// single file to multi file (> single file)
_tasks.todo('single-file-to-multi-file')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js']
  },
  output: {
    mode: Compile.mode.FILE,
    fileMask: './output/compiled-multi-{name}.js',
    way: Compile.output.MULTI
  },
  options: options,
  callback: _callback('single-file-to-multi-file')
})

// multi file to single string
_tasks.todo('multi-file-to-single-string')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js', './test.js']
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.SINGLE
  },
  options: options,
  callback: _callback('multi-file-to-single-file')
})

// multi file to single file
_tasks.todo('multi-file-to-single-file')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js', './test.js']
  },
  output: {
    mode: Compile.mode.FILE,
    list: ['./output/mf2sf.min.js']
  // way: Compile.output.SINGLE
  },
  options: options,
  callback: _callback('multi-file-to-single-file')
})

// multi file to multi string
_tasks.todo('multi-file-to-multi-string')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js', './test.js']
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.MULTI,
    list: ['main', 'test']
  },
  options: options,
  callback: _callback('multi-file-to-multi-string')
})

// multi file to multi file
_tasks.todo('multi-file-to-multi-file')
Compile({
  input: {
    mode: Compile.mode.FILE,
    list: ['./main.js', './test.js']
  },
  output: {
    mode: Compile.mode.FILE,
    way: Compile.output.MULTI,
    list: ['./output/mf2mf-main.js', './output/mf2mf-test.js']
  },
  options: options,
  callback: _callback('multi-file-to-multi-file')
})

// single string to single string
_tasks.todo('single-string-to-single-string')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: [_jsCode0]
  },
  output: {
    mode: Compile.mode.STRING
  },
  options: options,
  callback: _callback('single-string-to-single-string')
})

// single string to single file
_tasks.todo('single-string-to-single-file')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: [_jsCode0]
  },
  output: {
    mode: Compile.mode.FILE,
    list: ['./output/s2f.min.js']
  },
  options: options,
  callback: _callback('single-string-to-single-file')
})

// single string to multi string (> single string)
_tasks.todo('single-string-to-multi-string')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: _jsCode0
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.MULTI
  },
  options: options,
  callback: _callback('single-string-to-multi-string')
})

// single string to multi file (> one file)
_tasks.todo('single-string-to-multi-file')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: [_jsCode0]
  },
  output: {
    mode: Compile.mode.FILE,
    way: Compile.output.MULTI,
    list: ['./output/s2mf.min.js']
  },
  options: options,
  callback: _callback('single-string-to-multi-file')
})

// multi string to single string
_tasks.todo('multi-string-to-single-string')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: [_jsCode0, _jsCode1, _jsCode2]
  },
  output: {
    mode: Compile.mode.STRING
  },
  options: options,
  callback: _callback('multi-string-to-single-string')
})

// multi string to single file
_tasks.todo('multi-string-to-single-file')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: {zero: _jsCode0, one: _jsCode1, two: _jsCode2}
  },
  output: {
    mode: Compile.mode.FILE,
    way: Compile.output.SINGLE,
    list: ['./output/ms2sf.min.js']
  },
  options: options,
  callback: _callback('multi-string-to-single-file')
})

// multi string to multi string
_tasks.todo('multi-string-to-multi-string')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: {zero: _jsCode0, one: _jsCode1, two: _jsCode2}
  },
  output: {
    mode: Compile.mode.STRING,
    way: Compile.output.MULTI
  },
  options: options,
  callback: _callback('multi-string-to-multi-string', true)
})

// multi string to multi file
_tasks.todo('multi-string-to-multi-file')
Compile({
  input: {
    mode: Compile.mode.STRING,
    list: {zero: _jsCode0, one: _jsCode1, two: _jsCode2}
  },
  output: {
    mode: Compile.mode.FILE,
    way: Compile.output.MULTI,
    fileMask: './output/ms2mf-{name}.min.js'
  },
  options: options,
  callback: _callback('multi-string-to-multi-file')
})
