/**
 * * CLASS GENERICAS(GENERIC CLASSES)
 *  
 * As classes, assim como as interfaces, podem ser genéricas. Quando uma classe genérica é instanciada com new, seus parâmetros de tipo são inferidos da mesma forma que em uma chamada de função:
*/

//definimos uma class Generica, que aceita um paramentro de tipo chamado Type
class Box<Type>{
    //menbros da class

    //definimos propriedades da class
    //a propriedade e do tipo fornecido no paramentro de tipo
    contents: Type;

    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    //para criar e iniciar um objeto pela classe precisamos fornecer um paramentro chamado value do tipo do paramentro de tipo Tupe
    constructor(value: Type) {
        this.contents = value;
    }
}

//declaramos uma nova instancia de objeto da class fornecendo um paramentro de tipo, como uma string literal
//Quando uma classe genérica é instanciada com new, seus parâmetros de tipo são inferidos da mesma forma que em uma chamada de função
const b1 = new Box("hello!");


/**
 * As classes podem usar restrições e padrões genéricos da mesma forma que as interfaces.
*/
