/**
 * * DESESTRUTURAÇÃO DE PARAMENTROS
 * 
 *  Você pode usar a desestruturação de parâmetros para descompactar convenientemente objetos fornecidos como um argumento em uma ou mais variáveis ​​locais no corpo da função. Em JavaScript, fica assim:
*/

//declara uma function que aceita como paramentro um objeto com tres propriedades
function sum({a, b, c}) {
    //apos o paramentro ter sido desestruturado e amrazenado cada propriedadee em um variaivel individual
    console.log(a + b + c);
}

//fornecemos como argumento um objeto desestruturado em variaveis individuis dentro do corpo da function
sum({a: 10, b: 3, c: 9});

/**
 * A anotação de tipo para o objeto segue a sintaxe de desestruturação:
*/

//add como parametros uma sintaxe de desestruturação de objeto, que aceita como argumento um objeto com tres propriedade do tipo number, que e desestruturado para tres variaveis indiduavis que podem ser acessadas dentro do corpo da function
function sum2({a, b, c}: {a: number; b: number; c: number}) {
    console.log(a + b + c);
}

/*
 * Isso pode parecer um pouco detalhado, mas você também pode usar um tipo nomeado aqui:
 * 
*/

// Igual ao exemplo anterior
//define um tipo chamado ABC, que e um objeto com tres propriedade do tipo number
type ABC = {a: number; b: number; c: number};

//a function aceita como paramento a sintaxe de desestruturação de objeto
//aqui o paramentro ABC e desetrutura em variaiveis individuas a, b, c que podem ser acessados dentro do corpo da function
function sum3({a, b, c}: ABC) {
    console.log(a + b + c);
}