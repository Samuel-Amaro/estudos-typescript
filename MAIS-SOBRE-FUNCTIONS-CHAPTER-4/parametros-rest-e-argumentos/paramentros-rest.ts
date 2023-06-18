/**
 * * PARAMENTROS REST(DESCANSO)
 * 
 *  Além de usar parâmetros opcionais ou sobrecargas para criar funções que podem aceitar uma variedade de contagens fixas de argumentos, também podemos definir funções que aceitam um número ilimitado de argumentos usando parâmetros rest.
 * 
 * Um parâmetro rest aparece depois de todos os outros parâmetros e usa a ...sintaxe:
*/

//declaramos uma function regular 
//que declara dois paramentros
//o primeiro e um paramentro normal n do tipo number
//o segundo e um paramentro rest(acecita um numero ilimitado de paramentros) do tipo number
function multiply(n: number, ...m: number[]) {
    //retorna um array de numeros multiplicados
    return m.map((x) => n * x);
}

//'a' obtem valor [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

/**
 * No TypeScript, a anotação de tipo nesses parâmetros é implicitamente any[] em vez de any, e qualquer anotação de tipo fornecida deve estar na forma Array<T> ou T[], ou um tipo de tupla (sobre o qual aprenderemos mais adiante).
*/