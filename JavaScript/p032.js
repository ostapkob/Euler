'use strict'
let result = 0
for (let i=1; i<100; i++ ) {
  for (let j=100; j<10000; j++) {
    let x = j*i
    let xji = String(x) + String(j) + String(i)
    xji = xji.split('').sort().join('')
    if (xji == '123456789') {
      result += x 
      console.log(i, j, x)
    }
  }
}

console.log(result)
