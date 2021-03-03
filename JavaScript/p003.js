// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?
function isSimple(n) {
    x = 3
    while (x * x <= n) {
        x += 2
        if (n % x == 0) {
            return false
        }
    }
    return true
}

function maxSimpleDivider(number) {
    for (let i = number; i > 0; i--) {
        if (isSimple(i)) {
            if (number % i == 0) {
                return i
            }
        }
    }
    return number
}


console.log(maxSimpleDivider(13195))
// console.log(maxSimpleDivider(600851475143))
console.log(Date())