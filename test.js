var tape = require('tape')
var bufferConcat = require('./')

tape('concatenate array buffers', function (t) {
  t.plan(7)

  var b1 = new ArrayBuffer(1)
  var b2 = new ArrayBuffer(2)
  var b3 = new ArrayBuffer(3)
  
  var v1 = new Uint8Array(b1)
  var v2 = new Uint8Array(b2)
  var v3 = new Uint8Array(b3)

  v1[0] = 0

  v2[0] = 1
  v2[1] = 2

  v3[0] = 3
  v3[1] = 4
  v3[2] = 5

  var b4 = bufferConcat(b1, b2, b3)
  t.equal(b4.byteLength, 6)

  var v4 = new Uint8Array(b4)
  for (var i = 0; i < 6; i++) {
    t.equal(v4[i], i)
  }
})
