/**
 * * EXPORTADOR 
 * 
 *  Os identificadores são exportados definindo a exports propriedade em um global chamado module.
*/

function absolute(num: number) {
    if(num < 0) 
        return num * -1;
    return num;
}

//os identificadores são exportados definindo a exports propriedade em um global chamado modules
module.exports = {
    pi: 3.14,
    squareTwo: 1.41,
    phi: 1.61,
    absolute,
};

/**
 * Em seguida, esses arquivos podem ser importados por meio de uma require declaração:
*/

const maths = require("maths");
maths.pi;

/**
 * Ou você pode simplificar um pouco usando o recurso de desestruturação em JavaScript:
*/

const {squareTwo} = require("maths");
squareTwo;