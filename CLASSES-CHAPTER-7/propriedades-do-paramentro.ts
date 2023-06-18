/**
 * * PROPRIEDADEES DO PARÂMENTRO(PARAMETER PROPERTIES)
 * 
 *  O TypeScript oferece sintaxe especial para transformar um parâmetro de construtor em uma propriedade de classe com o mesmo nome e valor. Eles são chamados de propriedades de parâmetro e são criados prefixando um argumento do construtor com um dos modificadores de visibilidade public, private, protected ou readonly. O campo resultante obtém esses modificadores:
*/

//definimos uma class
class Params{
    //declaramos um metodo especial construtor, que e usado para criar e inicializada um novo objeto
    //o metodo construtor possui paramentros que são obrigatorios para inicializar o objeto
    //O TypeScript oferece sintaxe especial para transformar um parâmetro de construtor em uma propriedade de classe com o mesmo nome e valor. Eles são chamados de propriedades de parâmetro e são criados prefixando um argumento do construtor com um dos modificadores de visibilidade public, private, protected ou readonly.
    constructor(public readonly x: number, protected y: number, private z: number) {
        //corpo não necessario
    }
}

//declaramos uma instancia de objeto da class e atribuimos a
const a1 = new Params(1, 2, 3);
//tentando acessar a propriedade x que e somente leitura 
console.log(a1.x);

//tentando acessar a propriedade z que e do tipo number, mas e privada
console.log(a1.z);
