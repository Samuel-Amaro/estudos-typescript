function isPrime(num) {
    for (var diviser = 2; diviser < num; diviser++)
        if (num % diviser === 0)
            return false;
    return true;
}
function main(num) {
    var numbersPrime = [];
    for (var index = 1; index < num; index++) {
        if (isPrime(index)) {
            numbersPrime.push(index);
        }
    }
    return numbersPrime.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
}
var result = main(1000);
console.log(result);
