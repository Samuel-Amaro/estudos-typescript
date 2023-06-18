function isPrime(num: number) {
    for(let diviser = 2; diviser < num; diviser++) 
        if(num % diviser === 0) return false;
    return true;
}

function main(num: number) {
    const numbersPrime: number[] = [];
    for(let index = 1; index < num; index++) {
        if(isPrime(index)) {
            numbersPrime.push(index);
        }
    }
    return numbersPrime.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = main(1000);
console.log(result);