factorial = function(n) {
  if (n<1) {
    return 1
  }
  return n*factorial(n-1)
}
sumNumberStr = function(number) {
  let sum = 0
  for (let n of ''+number)  {
    sum+=1*n
  }
  return sum
}

sumNumber = function(n) {
  len = n.toString().length
  for (let i=0; i<10; i++) {
    console.log(i)
  }
  return n

}

for (i of [20, 302, 405, 555, 111, 1234, 8567]){
console.log(sumNumber(i))
}
// var n=22
// while( n--) {
//   fac = factorial(n);
//   res = sumNumberStr(fac)
//   console.log(n,  res)
// }

