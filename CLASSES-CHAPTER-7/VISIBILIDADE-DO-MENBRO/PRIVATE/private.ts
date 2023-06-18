/**
 * * PRIVATE(PRIVADO)
 * 
 *  private é como protected, mas não permite acesso ao membro mesmo de subclasses:
*/

//define uma class Base
class Base4{
    //campos da classe

    //definimos uma propriedade chamada x inicializada com valor 0 que define sua visiibildiade como privada
    //private é como protected, mas não permite acesso ao membro mesmo de subclasses:
    private x = 0;
}

//declaramos uma instancia de objeto e atribuimos a b
const b = new Base();

// Não pode acessar de fora da classe
//a propriedade x do objeto e privada, so pode ser acessada dentro do escopo da class
console.log(b.x);

//definimos uma class Filha que herda tudo de Base
class Derived4 extends Base4{
    //campos da classe

    //definimos um metodo da class filha com visibilidade publica o padrão
    showX() {
        //Não consigo acessar nas subclasses
        //propriedades privadas da classe pai não são acessiveis as classes filhas
        console.log(this.x);
    }
}

/**
 * Como private os membros não são visíveis para classes derivadas, uma classe derivada não pode aumentar sua visibilidade:
*/

//definimos uma class Filha que herda tudo de Base
class Derived5 extends Base4{
    //campos da classe

    //alterando o contrato da propriedade x, para tentar torna publica, na class filha
    //isso não funciona
    x = 1;
}