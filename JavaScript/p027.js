'use strict'
function isSimple(n) {
    n = Math.abs(n)
    let x = 3
    while (x * x <= n) {
        x += 2
        if (n % x == 0) {
            return false
        }
    }
    return true
}

let sqtSimple = function(n, a, b) {
  let count = 0
  for (let i=0; i<=n; i++) {
    let number = i**2 + a*i + b
    if (isSimple(number)) {
      count++
    }
    else {
      return count
    }
  }
  return count
}

let max_number = 0
let max_a = 0 
let max_b = 0 
let n = 1000

for (let a=-n; a<n; a++) {
  for (let b=-n; b<=n; b++) {
    let res = sqtSimple(n, a, b)
    if (res>max_number) {
      max_number = res
      max_a = a
      max_b = b
    }
  }
}
console.log(max_number, max_a, max_b)

