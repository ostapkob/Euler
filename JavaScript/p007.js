//  Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13.
//  Очевидно, что 6-ое простое число - 13.
//  Какое число является 10001-ым простым числом?

isPrime = function(n) {
    if (n%2 == 0) {
        return false
    }
    let d =3 ;
    while  ((d*d <= n) && (n%d !=0)) {
        d +=2
    }
    return (d <= n) && (n%d != 0)
}
// let i=100000;
let i=0;
let countPrime = 0
while (i++<1000000) {
    isPrime(i) && countPrime++
    if (countPrime>=10001) {
        console.log('->', i);
        break;
    }
}
console.log(countPrime)
console.log(Date())
