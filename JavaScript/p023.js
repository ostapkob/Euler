getDivisors = function*(n) {
  let i=0;
  while(i<n/2+1){
    i++;
    if (n%i == 0) {
      yield i;
    }
  }
}

isAbundantNumber = function(n) {
  let iter = getDivisors(n);
  let i = iter.next().value;
  let result =0;
  while (i) {
    if (i){
      result += i 
    }
    i = iter.next().value
  }
  return result > n
}

listAbundantNumber = function(i) {
  result = []
  while(i--) {
    if (isAbundantNumber(i) ){
      result.push(i)
    }
  }
  return result.reverse()
}

n = 28123
reduser = (sum, el) => sum+el

sumAll = [...Array(n).keys()].reduce(reduser);

sumAb = listAbundantNumber(n).reduce(reduser)
console.log(sumAll - sumAb)



