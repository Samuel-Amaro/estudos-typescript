/**
 * * PUBLIC(PUBLICO)
 * 
 *  A visibilidade padrão dos membros da classe é public. Um public membro pode ser acessado em qualquer lugar:
*/

//definimos uma class
class Greeter{
    //campos da classe
    //definimos um metodo com visibilidade public, pode ser acessado em qualquer lugar
    //menbros da classe por padrão possui visibilidade public
    public greet() {
        console.log("hi!");
    }
}

//declaramos uma nova instancia de objeto da class e atribuimos a g
const g = new Greeter();
//chamamos o metodo greet definido com visibilidade public, pode ser acessado 
g.greet();

/**
 * Como public já é o modificador de visibilidade padrão, você nunca precisará escrevê-lo em um membro da classe, mas pode optar por fazê-lo por motivos de estilo/legibilidade.
*/