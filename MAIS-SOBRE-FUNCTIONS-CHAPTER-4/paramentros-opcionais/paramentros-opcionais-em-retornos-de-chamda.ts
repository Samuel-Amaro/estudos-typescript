/**
 * * PARAMENTOS OPCINAIS EM RETORNOS DE CHAMADA(CALLBACK)
 *  
 * Depois de aprender sobre parâmetros opcionais e expressões de tipo de função, é muito fácil cometer os seguintes erros ao escrever funções que invocam retornos de chamada(CALLBACK):
*/

//declara function regular com dois paramentros
//o primeiro aceita um array que pode ter elementos de qualquer tipo
//o segundo argumento e uma expressão de tipo de funcção com dois argumento, o primeiro obrigatorio do tipo qualquer o segundo argumento opcional do tipo number a callback paramentro deve retorna um void
//add anotações de tipo de paramentro
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

/**
 * O que as pessoas geralmente pretendem ao escrever index? como um parâmetro opcional é que desejam que ambas as chamadas sejam legais:
*/

//force dois argumento para a function myForEach, e para a callback somente e fornecido o argumento obrigatorio
myForEach([1, 2, 3], (a) => console.log(a));
//aqui fornecemos o obrigatorio e o opcional para a callback argumento
myForEach([1, 2, 3], (a, i) => console.log(a, i));

/**
 * O que isso realmente significa é que callback pode ser invocado com um argumento . Em outras palavras, a definição da função diz que a implementação pode ser assim:
*/

function myForEach2(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i = 0; i < arr.length; i++) {
        // Não estou com vontade de fornecer o índice hoje
        //invoca callback paramentro com somenteo o argumento obrigatorio
        callback(arr[i]);
    }
}

/**
 * Por sua vez, o TypeScript aplicará esse significado e emitirá erros que não são realmente possíveis:
*/

myForEach([1, 2, 3], (a, i) => {
    //não temos certeza se podemos chamar toFixed no argumento i pois o argumento e opcional pode ou não estar definido
    console.log(i.toFixed());
});

/**
 * Em JavaScript, se você chamar uma função com mais argumentos do que parâmetros, os argumentos extras são simplesmente ignorados. O TypeScript se comporta da mesma maneira. Funções com menos parâmetros (do mesmo tipo) sempre podem substituir funções com mais parâmetros.
 * 
 * Ao escrever um tipo de função para um retorno de chamada(callback), nunca escreva um parâmetro opcional, a menos que pretenda chamar a função sem passar esse argumento
*/