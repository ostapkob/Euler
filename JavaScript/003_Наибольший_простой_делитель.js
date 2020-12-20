function isSimple(n) {
    x = 3
    while (x * x < n) {
        x += 2
        if (n % x == 0) {
            return false
        }
    }
    return true
}

function maxSimpleDivider(number) {
    lsSimlpeDivider = []
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