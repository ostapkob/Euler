'use strict'

let n = 100;
let range = new Set([]);
for (let a=2; a<=n; a++) {
  for (let b=2; b<=n; b++) {
    range.add(a**b)
  }
}

console.log(range.size)
