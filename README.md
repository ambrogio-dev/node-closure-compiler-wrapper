# Google Closure Compiler wrapper for Node.js

[![NPM Version](http://img.shields.io/npm/v/closure-compiler-wrapper.svg?style=flat)](https://www.npmjs.org/package/closure-compiler-wrapper)
[![NPM Downloads](https://img.shields.io/npm/dm/closure-compiler-wrapper.svg?style=flat)](https://www.npmjs.org/package/closure-compiler-wrapper)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRV4AM2CA9F78 "Donate using Paypal")

Wrap the latest version of [Google Closure Compiler](https://www.npmjs.com/package/google-closure-compiler)  
See https://developers.google.com/closure/compiler/ for more informations  
NOTE: need JDK 7 or latest

## Npm Installation

```bash
$ npm install closure-compiler-wrapper
```

## Example

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

var someJScode = 'function x() {var a = 4; b = 5; var c = a+b; return c}; x(6)'

compiler({
  input: {
    mode: Compile.mode.STRING,
    list: someJScode
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

see test.js for more examples

**NOTE: multiple operation are very expensive and can easily freeze the machine until end**

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
 * @param {string} [prm.output.fileMask=%name.min.js] will apply mask to output file from input file
 * @param {object} prm.options @see options.js @see https://developers.google.com/closure/compiler/docs/api-ref
 * @param {function(err,data)} prm.callback data contains output string(s) as single string or object
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
