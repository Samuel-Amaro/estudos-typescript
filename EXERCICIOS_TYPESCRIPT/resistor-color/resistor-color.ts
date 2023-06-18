function colorCode(color: string): number {
  return COLORS.indexOf(color);
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

console.log(colorCode('black')); //0

console.log(colorCode('white')); //9

console.log(colorCode('orange')); //3
