strNumber = function (i, delimiter) {
ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  delimiter = delimiter || ''
  let str = ''
  let tens = undefined
  let ones = undefined
  let hundred = undefined
  if (i<20) {
    str = ONES[i]
  }
  else if (i<100) {
     tens = Math.floor(i/10)
     ones = i%10
    if (ones) {
      str = TENS[tens] + delimiter +  ONES[ones]
    }
    else {
      str = TENS[tens]
    }
  }
  else if (i<1000) {
    hundred = Math.floor(i/100)
    tens = Math.floor((i % 100)/10)
    ones = i%10
    str = ONES[hundred] + delimiter + "hundred" 
    if ((i%100)<20) {
      str += delimiter +  ONES[i%100]
    }
    else {
      if (ones) {
        str +=  delimiter +   TENS[tens] +  delimiter +  ONES[ones]
      }
      else {
        str +=  delimiter +  TENS[tens]
      }
    }
  }
  return str
}

n=1000
sum = 0
while (n--) {
  console.log(n,'|',  strNumber(n).length, '|',  strNumber(n, ' '))
  sum += strNumber(n).length
}
console.log(sum)
