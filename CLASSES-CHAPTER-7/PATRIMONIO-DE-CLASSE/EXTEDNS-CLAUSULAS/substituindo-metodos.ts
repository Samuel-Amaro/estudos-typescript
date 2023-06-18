/**
 * * SUBSTITUINDO MÉTODOS
 * 
 *  Uma classe derivada também pode substituir um campo ou propriedade de classe base. Você pode usar a super. sintaxe para acessar os métodos da classe base. Observe que, como as classes JavaScript são um objeto de pesquisa simples, não há noção de um “supercampo”.
 * 
 * O TypeScript impõe que uma classe derivada seja sempre um subtipo de sua classe base.
 * 
 * Por exemplo, aqui está uma maneira legal de sobrescrever um método:
*/

//DEFINIMOS UMA CLASS BASE
class Base2 {
    //campos da classe
    //definimos um metodo na classe base
    greet() {
        console.log("Hello, world!");
    }
}

//declaramos uma class filha que herda todoas as propriedades e metodos da sua classe base e tambem define seus proprios menbros adicionais
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
//Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".
//declaramos Derived class como filha de Base
class Derived3 extends Base2{
    //Uma classe derivada também pode substituir um campo ou propriedade de classe base.
    //aqui substituimos o metodo gret da class base
    greet(name?: string): void {
        if(name === undefined) {
            //chama o metodo original da super classe
            super.greet();
        }else{
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}

//declaramos uma instancia de objeto da class derived e atribuimos a d
const d2 = new Derived3();
//chamamos metodo da class base
d2.greet();
//chamamos metodo da class derivada, subclass
d2.greet("reader");

/**
 * É importante que uma classe derivada siga seu contrato de classe base. Lembre-se que é muito comum (e sempre legal!) referir-se a uma instância de classe derivada por meio de uma referência de classe base:
*/

// Alias a instância derivada por meio de uma referência de classe base
//declaramos uma constante b que e do tipo da class Base que e inicalizada com um objeto da class Derived, filha da Base
const b: Base2 = d2;
//Sem problemas
b.greet();

/**
 * E se Derived não seguisse o contrato de Base ?
*/

//declaramos uma class Filha filha que herda todoas as propriedades e metodos da sua classe base e tambem define seus proprios menbros adicionais
class Derived2 extends Base{
    //Uma classe derivada também pode substituir um campo ou propriedade de classe base.
    //aqui estamos subsituindo o metodo greet da class base, mas não estamos seguindo a assinatura do metodo, estamos violando o contrato de Base
    //Tornar este parâmetro obrigatório
    greet(name: string): void {
        console.log(`Hello, ${name.toUpperCase()}`);
    }
}

/**
 * Se compilássemos este código apesar do erro, este exemplo falharia:
*/
//declaramos uma instancia de objeto da class Filha e atribuimos a b2
const b2: Base = new Derived2();
//Falha porque "nome" será indefinido
//acessando o metodo original da class base
b2.greet();