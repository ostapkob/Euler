'use strict'

let getTriangleNumber = function () {
  var number = 1 
  let sum = 0
  return function() {
    sum +=  number++;
    return  sum;
  }
}();

let dividers = function(num) {
  let num2 = num
  let dev = 1
  let total = 0
  while (dev<num2) {
    dev++
    if (num%dev == 0) {
      num2 = num / dev;
      total +=2;
    }
  }
  return total
}

let dividersTest = function(num) {
  let total = 0;
  let topNumber = num ;
  while(num) {
    num -=1
    if (topNumber % num === 0) {
      total++;
    }
  } 
  return total
}

let ShowDividers = function(num) {
  let total = [];
  let topNumber = num ;
  while(num) {
    num -=1
    if (topNumber % num === 0) {
      total.push(num)
    }
  } 
  return total
}

let number = 0;
while (true) {
  number = getTriangleNumber()
  if (dividers(number)> 1000) {
    console.log(number);
    // console.log(ShowDividers(number))
    break;
  }
}
