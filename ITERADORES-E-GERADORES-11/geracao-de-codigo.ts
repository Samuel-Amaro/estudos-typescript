/**
 * * GERAÇÃO DE CÓDIGO
 * 
 * * VISANDO ES5 E ES3
 * 
 * Ao direcionar um mecanismo compatível com ES5 ou ES3, os iteradores são permitidos apenas em valores do tipo Array. É um erro usar loops for..of em valores que não sejam Array, mesmo se esses valores não-Array implementarem a propriedade Symbol.iterator.
 * 
 * O compilador irá gerar um loop for simples para um loop for..of, por exemplo:
*/

let numbers = [1, 2, 3];

for(let num of numbers) {
    console.log(num);
}

/**
 * será gerado como:
*/

/**
var numbers = [1, 2, 3];
for (var _i = 0; _i < numbers.length; _i++) {
  var num = numbers[_i];
  console.log(num);
} 
*/

/**
 * * Visando ECMAScript 2015 e superior
 * 
 * Ao direcionar um mecanismo compatível com ECMAScipt 2015, o compilador irá gerar loops for..of para direcionar a implementação do iterador integrado no mecanismo.
*/