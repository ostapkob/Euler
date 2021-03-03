// lenNumber = function (number){
//   counter = 0
//   while (number) {
//     number = Math.floor(number/10)
//     counter++
//   }
//   return counter
// }

sumNumbers = function(number) {
  sum = 0
  while (number) {
    sum += Math.floor(number%10)
    number = Math.floor(number/10)
  }
  return sum
}
console.log(sumNumbers(2**1000))


