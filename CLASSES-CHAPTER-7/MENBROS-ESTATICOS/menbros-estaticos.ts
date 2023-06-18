/**
 * * MENBROS ESTÁTICOS
 * 
 *  As classes podem ter static membros. Esses membros não estão associados a uma instância específica da classe. Eles podem ser acessados ​​através do próprio objeto construtor da classe:
*/

//definimos uma class
class MyClass{
    //menbros da class

    //definimos uma propriedade estatica da class, so definimos o menbro estatico aqui, mas um menbro estatico não esta associado a uma instancia especifica da classe, mas sim a class
    //podem ser acessados através do próprio objeto construtor da class
    static x = 0;

    //definimos um metodo statico da class
    static printX() {
        //acessando menbro estatico da class
        console.log(MyClass.x);
    }
}

//acessando menbro estatico fora da class, não precisa esta associado a uma instancia especifica da class, para acessar o menbro
console.log(MyClass.x);
//acessando metodo statico
MyClass.printX();

/**
 * Os membros estáticos também podem usar os mesmos modificadores public, protected e de private visibilidade:
*/

//definmos outra class
class MyClass2{
    //menbros da class

    //definimos uma propriedade estatica da class, so definimos o menbro estatico aqui, mas um menbro estatico não esta associado a uma instancia especifica da classe, mas sim a class
    //podem ser acessados através do próprio objeto construtor da class
    //menbros estaticos também podem usar os mesmos modificadores de visibilidade, como public, private, protected
    static x = 0;
}

//acessando menbro statico privado da class, sendo que não podemos
console.log(MyClass2.x);

/**
 * Membros estáticos também são herdados:
*/

//definmos uma class Base, pai
class Base{
    //menbros da class

    //definmos um metodo estatico da propria class, não associado a instancia
    static getGreeting() {
        return "Hello world";
    }
}

//definimos uma class filha, que herda tudo de Base
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class Derived extends Base{
    //menbros da clas filha

    //declaramos uma propriedade public na class filha
    //a propriedade e inicializada com o valor de retorno do metodo estatico
    //herdado da class Base, acessado atraves da filha
    myGreeting = Derived.getGreeting();
}

