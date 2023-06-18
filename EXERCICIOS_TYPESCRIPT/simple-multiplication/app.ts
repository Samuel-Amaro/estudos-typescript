function simpleMultiplication(num: number): number{
  if(num % 2 === 0)
    return num * 8;
  return num * 9;
}

console.log(simpleMultiplication(15));
console.log(simpleMultiplication(20));
console.log(simpleMultiplication(7));
