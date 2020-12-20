// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. 
// Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.

function isPalindrome(n) {
    let str = n.toString()
    let center = 0
    if (str.length % 2 == 0) {
        center = str.length / 2
    }
    else {
        return false
    }
    if (str.substr(0, center) == str.substr(center, center).split('').reverse().join('')) {
        return true
    }
    return false
}
flag = false
for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
        if (isPalindrome(j * i)) {
            console.log(i, j, i * j)
            flag = true
            break
        }
    }
    if (flag) break
}
console.log(Date())