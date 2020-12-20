// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
// Какое самое маленькое число делится нацело на все числа от 1 до 20?
function minNumberDividerAllRange(number) {
    x = number
    let flag = false
    while (true) {
        x++
        flag = true
        for (let i=number; i>1; i--) {
            if (x%i!=0) {
                flag = false
                break
            }
        }
        if (flag) {
            return x
        }
    }
}

console.log(minNumberDividerAllRange(20))