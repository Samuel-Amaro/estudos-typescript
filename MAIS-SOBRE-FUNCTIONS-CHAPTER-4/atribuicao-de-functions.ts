/**
 * * ATRIBUIÇÃO DE FUNÇÕES
 * 
 * * Tipo de retorno void
 * 
 * O void tipo de retorno para funções pode produzir algum comportamento incomum, mas esperado.
 * 
 * A digitação contextual com um tipo de retorno void não força as funções a não retornarem algo . Outra maneira de dizer isso é um tipo de função contextual com um void tipo de retorno ( type vf = () => void), quando implementado, pode retornar qualquer outro valor, mas será ignorado.
 * 
 * Assim, as seguintes implementações do tipo () => void são válidas:
*/

//declaramos um tipo chamado voidFunc que e uma function anonima que retorna void
type voidFunc = () => void;

//declamos uma arrow function do tipo voidFunc
const f3: voidFunc = () => {
    return true;
};

//declaramos outra arrow function do tipo voidFunc
const f4: voidFunc = () => true;

//mesma coisa
const f5: voidFunc = function() {
    return true;
};

/**
 * E quando o valor de retorno de uma dessas funções for atribuído a outra variável, ela manterá o tipo de void:
*/

const v3 = f3();
const v4 = f4();
const v5 = f5();

/**
 * Esse comportamento existe para que o código a seguir seja válido mesmo que Array.prototype.push retorne um número e o Array.prototype.forEach método espere uma função com um tipo de retorno de void.
*/

const src = [1, 2, 3];
const dst = [0];

//for each espera uma callback que retorno void mas mesmo assim ainda funciona porque push retorna number[]
src.forEach((el) => dst.push(el));

/**
 * Há um outro caso especial a ser observado, quando uma definição de função literal tem um void tipo de retorno, essa função não deve retornar nada.
*/

function f6(): void {
    //@ts-expect-error
    return true;
}

const f7 = function(): void {
    //@ts-expect-error
    return true;
}