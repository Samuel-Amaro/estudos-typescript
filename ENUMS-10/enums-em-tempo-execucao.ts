/**
 * * ENUMS EM TEMPO DE EXECUÇÃO
 * 
 *  Enums são objetos reais que existem em tempo de execução. Por exemplo, a seguinte enumeração
*/

enum E {
    W, //0
    Y, //1
    Z, //2
};

/**
 * pode realmente ser passado para funções
*/

function f(obj: {W: number}) {
    return obj.W;
}

// Funciona, pois 'E' tem uma propriedade chamada 'W' que é um número.
f(E);