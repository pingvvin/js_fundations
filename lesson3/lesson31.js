// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

var i = 0
var n = 10

while (i <= n) {
    if (isPrime(i)) {
        console.log(i++)
    }
}