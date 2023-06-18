/**
 * * PROTECTED(PROTEGIDO) 
 * 
 * protected membros são visíveis apenas para subclasses da classe em que são declarados.
*/

//definimos uma class base
class Greeter2{
    //campos da classe

    //definimos um metodo com visibilidade public, pode ser acessado em qualquer lugar
    //menbros da classe por padrão possui visibilidade public
    public greet() {
        console.log("hi!");
    }

    //definimos um metodo com visibilidade protected, apenas visiveis para subclasses da classe que são declarados
    protected getName() {
        return "hi";
    }
}

//definimos uma class filha de Greeter2, que herda todas propriedades e metodos de Greeter2
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class SpecialGreeter extends Greeter2{
    //campos da class filha

    //declara um metodo com visibilidade publico da class filha
    public howdy() {
        //OK para acessar menbro protegido aqui
        //podemos acessar o menbro protegido da class pai, BASE por aqui, por meio da subclass
        console.log("Howdy, " + this.getName());
    }
}

//declaramos uma instancia de objeto e atribuimos a g
const g = new SpecialGreeter();
g.greet(); //OK, acessa metodo publico da classe pai
g.getName(); //tenta acessar metodo com visibilidade protegida a partir da subclass, não podemos.

