//without string functions

factorial = function(n) {
  if (n<=1) return 1n
  return n*factorial(n-1n)
}

lenNumber = function(n) {
  let i=1n, count=0
  while (n/i>1n) {
    i*=10n
    count ++
  }
  return count
}

sumDigits = function(n){
  let len = lenNumber(n)
  let sum = 0n
  for (let i=1; i<=len; i++) {
    let last = n%10n
    n = (n - last) / 10n
    sum+=last
  }
  return sum
}

n=BigInt(100)
result =  sumDigits(factorial(n))
console.log('>', n, Number(result))



