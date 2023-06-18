/**
 * * TIPOS LITERAIS(Literal Types)
 * 
 *  Além dos tipos gerais string e number, podemos nos referir a strings e números específicos em posições de tipo.
 * 
 * Uma maneira de pensar sobre isso é considerar como o JavaScript vem com diferentes maneiras de declarar uma variável. Ambos var e let permitem alterar o que é mantido dentro da variável, e const não. Isso se reflete em como o TypeScript cria tipos para literais.
*/

let changingString = "Hello World";
changingString = "Olá Mundo";
// Porque `changeString` pode representar qualquer string possível, isso
// é como o TypeScript o descreve no sistema de tipos
changingString;

const constrantString = "Hello World";
// Como `constantString` só pode representar 1 string possível,
// tem uma representação de tipo literal
constrantString;

/**
 * Por si só, os tipos literais não são muito valiosos:
*/

//declara uma variavel de tipo literal string helo e atribui uma string literal hello
let x: "hello" = "hello";
//OK
x = "hello";

//...
//tem que ser do tipo literal string "hello"
x = "howdy";

/**
 * Não adianta muito ter uma variável que só pode ter um valor!
 * 
 * Mas combinando literais em uniões, você pode expressar um conceito muito mais útil - por exemplo, funções que aceitam apenas um determinado conjunto de valores conhecidos:
*/

//declaramos uma function chamada printText que declara dois paramentros
//aqui add anotações de tipo de paramentros para especificar os tipos de valores que os paramentros aceitam
//o segundo parametro e uma combinação de union com literals para fazer o argumento aceitar somente um determinado conjuento de vlaores conhecidos de tipos de string literais
function printText(s: string, alignment: "left" | "right" | "center") {
    //...
}

printText("Hello, world", "left");
printText("G'day, mate", "centre");

/**
 * Tipos literais numéricos funcionam da mesma maneira:
*/

//a function so retorna um determinado conjuento de valores conhecidos combinados com union e literals numericos
function compare(a: string, b: string): -1|0|1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

/**
 * Claro, você pode combiná-los com tipos não literais:
*/

//declarando um tipo de objeto
interface Options {
    width: number;
}

//combinamos o tipo do paramentro com union e literal para ser um dos dois, ou objeto ou literal
function configure(x: Options | "auto") {
    //...
}

configure({width: 100});
configure("auto");
configure("automatic");

/**
 * Há mais um tipo de tipo literal: literais booleanos. Existem apenas dois tipos literais booleanos e, como você pode imaginar, eles são os tipos true e false. O tipo booleanem si é, na verdade, apenas um alias para a união true | false.
*/