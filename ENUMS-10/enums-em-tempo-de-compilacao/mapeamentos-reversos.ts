/**
 * * MAPEAMENTOS REVERSOS
 * 
 *  Além de criar um objeto com nomes de propriedades para membros, os membros de enumerações numéricas também obtêm um mapeamento reverso de valores de enumeração para nomes de enumeração. Por exemplo, neste exemplo:
*/

enum Enum {
    A, //0
}

let a = Enum.A; //0
let nameOfA = Enum[a]; //"A"

/**
 * O TypeScript compila isso no seguinte JavaScript:
*/

/*
"use strict";

var Enum;

(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));

let a = Enum.A;
let nameOfA = Enum[a]; // "A"*/

/**
 * Nesse código gerado, um enum é compilado em um objeto que armazena os mapeamentos direto ( name-> value) e reverso ( value-> name). As referências a outros membros da enumeração são sempre emitidas como acessos de propriedade e nunca embutidas.
 * 
 * Lembre-se de que os membros da enumeração de strings não obtêm um mapeamento reverso gerado.
*/