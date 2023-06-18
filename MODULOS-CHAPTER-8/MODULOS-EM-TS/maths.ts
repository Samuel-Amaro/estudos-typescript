
//podemos ter uma exportação padrão 
//e podemos exportar varias outras coisas por meio do export

//exportamos uma variavel de escopo global
export var pi = 3.14;

//exportamos uma variavel de escopo de bloco
export let squareTwo = 1.41;

//exportamos uma constante
export const phi = 1.61;

//exportamos uma class vazia, exportação principal
export default class RandomNumberGenerator { }

//exportamos uma function
export function absolute(num: number) {
    if(num < 0)
        return num *- 1;
    return num;
}