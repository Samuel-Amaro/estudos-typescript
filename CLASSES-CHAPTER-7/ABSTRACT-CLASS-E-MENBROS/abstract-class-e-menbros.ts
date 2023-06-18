/**
 * * ABSTRACT CLASSES E MENBROS
 * 
 * Classes, métodos e campos no TypeScript podem ser abstratos.
 * 
 * Um método abstrato ou campo abstrato é aquele que não teve uma implementação fornecida. Esses membros devem existir dentro de uma classe abstrata , que não pode ser instanciada diretamente.
 * 
 * O papel das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos. Quando uma classe não possui membros abstratos, ela é chamada de concreta.
 * 
 * Vejamos um exemplo:
*/

//declaramos um class abstrata, que não pode ser instanciada diretamente
//O papel das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos. 
abstract class Base2{
    //menbros da classe

    //declarmaos um metodo abstrato, que não possui implementação fornecida somente assinatura
    abstract getName(): string;

    //declaramos um metodo chamado printName
    printName() {
        console.log("Hello, " + this.getName());
    }
}

//declaramos uma instancia de objeto e atribuimos a b3
//mas por Base2 ser uma class abastrata não podemos instancia um objeto diretamente dela
const b3 = new Base2();

/**
 * Não podemos instanciar Base porque new é abstrato. Em vez disso, precisamos criar uma classe derivada e implementar os membros abstratos:
*/

//declaramos uma class filha concreta que herda tudo da class Abstrata Base2
//implementamos a class abastrata pai por meio da class filha
class Derived2 extends Base2{
    //menbros da class

    //implementando o metodo abastrato da class pai
    getName() {
        return "world";
    }
}

//declaramos um objeto e o atribuimos a d4
const d4 = new Derived2();
d4.printName();

/**
 * Observe que, se esquecermos de implementar os membros abstratos da classe base, obteremos um erro:
*/

//declaramos uma class filha concreta que herda tudo da class base pai abstrata, aqui e um expelo que herdamos da class para implementar mas não implementamos
class Derived3 extends Base2{
    // esqueceu de fazer alguma coisa
}
