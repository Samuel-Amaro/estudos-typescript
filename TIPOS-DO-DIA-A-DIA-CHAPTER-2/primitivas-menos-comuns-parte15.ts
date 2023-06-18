/**
 * * PRIMITIVAS MENOS COMUNS
 * 
 *  Vale a pena mencionar o restante das primitivas em JavaScript que são representadas no sistema de tipos. Embora não nos aprofundemos aqui.
 * 
 * * BIGINT
 * 
 * A partir do ES2020, existe uma primitiva em JavaScript usada para inteiros muito grandes, BigInt:
*/

//usamos uma anotação de tipo para especificar explicitamente o tipo da variavel
//Criando um bigint por meio da função BigInt
const oneHundred: bigint = BigInt(100);

//Criamos um BigInt por meio da sintaxe literal
const anotherHundred: bigint = 100n;

/**
 * * symbol
 * 
 * Existe uma primitiva em JavaScript usada para criar uma referência globalmente única por meio da função Symbol():
*/

const firstName = Symbol("name");
const secondName = Symbol("name");

if(firstName === secondName) {
    //nunca pode acontecer
}