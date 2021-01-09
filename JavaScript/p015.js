'use strict'

// let len = 8;
// let total = 0;
// for (let a = 0; a < len; a++) {
//     for (let b = 0; b < len; b++) {
//         for (let c = 0; c < len; c++) {
//             for (let d = 0; d < len; d++) {
//                 for (let e = 0; e < len; e++) {
//                     for (let f = 0; f < len; f++) {
//                         for (let g = 0; g < len; g++) {
//                             for (let h = 0; h < len; h++) {
//                                 if (a + b + c + d + e + f + g + h == len - 1) {
//                                     total++
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(total)
// process.stdout.write('*')

// var permutation = function (numbers) {
//     var holdingArr = [];
//     var recursFun = function (num) {
//         if (num.length > numbers.length - 1) {
//             console.log(num)
//             holdingArr.push(num);
//             return;
//         }
//         for (let i = 0; i < numbers.length; i++) {
//             recursFun(num.concat([numbers[i]]));
//         }
//     };
//     recursFun([]);
//     return holdingArr;
// };
// console.log(permutation([0, 1, 2]))

let perm = function (numbers) {
    /* count only step in right if on 2x2 firs step do 2 step right then -> 200*/
    let total = 0;
    let reducer = (a, b) => a + b
    let recursFun = function (num) {
        if (num.length >= numbers.length) {
            if (num.reduce(reducer) === numbers.length - 1){
                total++
            }
            return
        }
        for (let i of numbers) {
            recursFun(num.concat(i))
        }
    }
    recursFun([])
    return total
}
let a = 5
let arr = []
while (a--) {
    arr.push(a)
}
arr = arr.reverse()
console.log(perm(arr))

// let perm = function (number) { // ? why not work
//     let total = 0
//     recursFun = function (num) {
//         if (num >= number) {
//             console.log(num)
//             return
//         }
//         for (let index = 0; index < number; index++) {
//             num += index
//             recursFun(num)
//         }
//     }
//     recursFun(1)
//     console.log(total)
// }
// perm(4)
