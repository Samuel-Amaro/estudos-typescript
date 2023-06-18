/**
 * * EXTENDS CLÁUSULAS
 * 
 * As classes podem extend partir de uma classe base. Uma classe derivada possui todas as propriedades e métodos de sua classe base e também define membros adicionais.
*/

//definimos uma class Base
class Animal{
    //declarações de campos
    //declaramos um metodo da class
    move() {
        console.log("Moving along!");
    }
}

//declaramos uma class Filha que herda todoas as propriedades e metodos da sua classe base e tambem define seus proprios menbros adicionais
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
//declaramos a class Dog como filha da class Animal
class Dog extends Animal{
    //campo add da class filha
    //declara um emtodo que aceita um paramentro do tipo number
    woof(times: number) {
        for(let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

//declaramos uma instancia de objeto e atribuimos a d
const d = new Dog();
//acessa metodo da class base 
d.move();
//acess o metodo proprio da class filha
d.woof(3);