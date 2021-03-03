// console.log('Четные числа Фибоначчи')
var _ = require('lodash');
const { performance } = require('perf_hooks');

function fib(n) {
  x = 0
  y = 1
  for (let i=0; i<n; i++){
    tmp =x
    x = y
    y += tmp
  }
  return y
}

let start = performance.now();

lsFib = (_.range(100).map(fib));

let total = 0;
for (let el of lsFib){
  if (el%2 == 0) {
    total += el
  }
}

console.log(total)
console.log((performance.now() - start)/1000)
