/**
 * * ORDEM DE INICIALIZAÇÃO
 * 
 *  A ordem que as classes JavaScript inicializam pode ser surpreendente em alguns casos. Vamos considerar este código:
*/

//definimos uma class Base
class Base3{
    //campos da classe
    name = "base";
    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    constructor() {
        console.log("My name is " + this.name);
    }
}

//definimos uma class filha, que herda tudo da class Pai, e pode definir seus proprios campos
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class Derived4 extends Base3{
    //Uma classe derivada também pode substituir um campo ou propriedade de classe base.
    //aqui estamos atribuindo um novo valor a propriedade name ao instanciar um objeto
    name = "derived";
}

//"Imprime" base não derivada
const d3 = new Derived4();

/**
 * O que aconteceu aqui?
 * 
 * A ordem de inicialização da classe, conforme definido pelo JavaScript, é:
 * 
    *  Os campos da classe base são inicializados
    * 
    * O construtor da classe base é executado
    * 
    * Os campos da classe derivada são inicializados
    * 
    * O construtor da classe derivada é executado
    * 
 * Isso significa que o construtor da classe base viu seu próprio valor name durante seu próprio construtor, porque as inicializações do campo da classe derivada ainda não haviam sido executadas. 
*/