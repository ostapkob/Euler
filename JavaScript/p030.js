'use strict'
let len = 5

for (let i=10**(len-1); i<10**len; i++) {
  let range = String(i).split('').map(Number).map(n=>n**len)
  let total = range.reduce((a, b)=> (a+b))
  if (total==i) {
    console.log(`sum(${range}) = ${total}`)
  }
}
