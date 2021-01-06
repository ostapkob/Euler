var ls = []
let showCollatz = function(n){
  if (n<=1) {
    let tmp = ls
    ls = []
    return tmp
  }
  else {
    if (n%2 === 0) {
      ls.push(n)
      return showCollatz(n/2)
    }
    else {
      ls.push(n)
      return showCollatz(n*3+1)
    }
  }
}

let total = 0
let collatz = function(n){
  if (n<=1) {
    let tmp = total
    total = 0
    return tmp
  }
  else {
    if (n%2 === 0) {
      total ++
      return collatz(n/2)
    }
    else {
      total ++
      return collatz(n*3+1)
    }
  }
}

maxColltz = function(n) {
  maxNum = 0
  maxIndex = 0
  while (n--) {
    res = collatz(n)
    if (res  > maxNum) {
      maxNum = res
      maxIndex = n
    }
  }
  return maxIndex
}

result = maxColltz(1000000)
console.log(result)

