# Google Closure Compiler wrapper for Node.js

[![NPM Version](http://img.shields.io/npm/v/closure-compiler-wrapper.svg?style=flat)](https://www.npmjs.org/package/closure-compiler-wrapper)
[![NPM Downloads](https://img.shields.io/npm/dm/closure-compiler-wrapper.svg?style=flat)](https://www.npmjs.org/package/closure-compiler-wrapper)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRV4AM2CA9F78 "Donate using Paypal")

[![NPM](https://nodei.co/npm-dl/closure-compiler-wrapper.png)](https://nodei.co/npm/closure-compiler-wrapper/)

Wrap Google Closure Compiler for easily use strings or files as input or output, either
single or multiple  
Wrap the latest version by npm [google-closure-compiler](https://www.npmjs.com/package/google-closure-compiler)  
See https://developers.google.com/closure/compiler/ for more informations  
NOTE: need JDK 7 installed or latest, will be checked on runtime

## Npm Installation

```bash
$ npm install closure-compiler-wrapper
```

## Usage

```js
var compiler = require('closure-compiler-wrapper')

compiler({
  input: {
    mode: Compile.mode.FILE,
    list: ['./one.js', './two.js', './three.js']
  },
  output: {
    mode: Compile.mode.FILE
    list: ['./one-compiled.js', './two.js', './three.js']
    way: Compile.output.SINGLE,
    fileMask './deploy/{name}.min.js'
  },
  options: options,
  callback: function(err, compiled) { }
})

```

**Arguments**
- **verbose** {true|false} enable verbose mode if true, default is false
- **input** {Object}
  - **mode** {*compiler.mode.FILE | compiler.mode.STRING*} indicates what **input.list** contains, default is *compiler.mode.STRING*
  - **list** {Array|Object|string} input as (from different input will be possible different output):  
    - files array
    ````js
    ['./js/one.js', './js/two.js', './js/three.js']
    ````
    - strings array
    ````js
    ['var a = 1', 'var b = 2', 'var c = 3']
    ````
    - strings as object key>value (see multiple output why use this way)
    ````js
    {one: 'var a = 1', two: 'var b = 2', three: 'var c = 3'}
    ````
    - single string
    ````js
    'var f = function(a, b) { return a * b }'
    ````
- **output** {Object}
  - **mode** {*compiler.mode.FILE | compiler.mode.STRING*} indicates the mode of the output; if *compiler.mode.STRING* the output will be in callback
  - **way** {*compiler.output.SINGLE | compiler.output.MULTI*} indicates the way of the output, default is *compiler.output.SINGLE*
  - **fileMask** {string} mask to apply to compiled files, single or multiple output, default is *{name}.min.js*
  - **list** {Array} for multiple output, list name for each file in input; if set, fileMask will be ignored
- **options** {Object} Google Closure Compiler options, see [options.js]( https://github.com/simone-sanfratello/node-closure-compiler-wrapper/blob/master/options.js) for full list (it's compiler --help parsed as JSON)
- **callback** {function(err,data,response)} callback when the operation is done, if output.mode is compiler.mode.STRING, *compiled* contains the output, *response* contains: *stderr* full stderr output *errors*:errors count *warnings* warnings count

## Examples

```js
var compiler = require('closure-compiler-wrapper')

var options = {
  compilation_level: 'SIMPLE',
  language_in: 'ECMASCRIPT5'
}

compiler({
  input: {
    mode: Compile.mode.FILE,
    list: ['./test.js']
  },
  output: {
    mode: Compile.mode.STRING
  },
  options: options,
  callback: function(err, compiled) {
    if(err)
      console.error('compilation error', err)
    else {
      console.log('compilation done, output', compiled)
    }
  }
})

compiler({
  input: {
    mode: Compile.mode.STRING,
    list: 'function x() {var a = 4; b = 5; var c = a+b; return c}; x(6)'
  },
  output: {
    mode: Compile.mode.STRING
  },
  options: options,
  callback: function(err, compiled) {
    if(err)
      console.error('compilation error', err)
    else {
      console.log('compilation done, output', compiled)
      // > function x(){b=5;return 4+b}x(6);
    }
  }
})

```

see [test.js]( https://github.com/simone-sanfratello/node-closure-compiler-wrapper/blob/master/test.js) for more examples

**NOTE: multiple operations are very expensive and can easily freeze the machine until end**

### TODO
* stop on first error on multi input or output
* set multiple compiler runner limit (default 2 or 3)
* coverage
* use stdin for input = string? do benchmarks


### jsdoc

````js

/**
 * check java installed and minimum required version
 * default output: single string
 *
 * @param {object} prm
 * @param {boolean} [prm.verbose=false] enable verbose mode
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
 */
````

## License

The MIT License (MIT)

Copyright (c) 2016 Simone Sanfratello

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
