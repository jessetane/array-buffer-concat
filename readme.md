# array-buffer-concat
Concatenate ArrayBuffers.

[![npm](http://img.shields.io/npm/v/array-buffer-concat.svg?style=flat-square)](http://www.npmjs.org/array-buffer-concat)
[![tests](https://img.shields.io/travis/jessetane/array-buffer-concat.svg?style=flat-square&branch=master)](https://travis-ci.org/jessetane/array-buffer-concat)

## Why
Just bikeshedding..

## How
`Uint8Array#set()`

## Example
```javascript
var bufferConcat = require('array-buffer-concat')

var b1 = new ArrayBuffer(1)
var b2 = new ArrayBuffer(2)
var b3 = bufferConcat(b1, b2)

assert.equal(b3.byteLength, 3)
```

## License
WTFPL
