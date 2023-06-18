/**
 * * POR QUE NÃO HÁ CLASS ESTÁTICAS?
 * 
 *  TypeScript (e JavaScript) não tem uma construção chamada static class da mesma forma que, por exemplo, C# tem.
 * 
 * Essas construções só existem porque essas linguagens forçam todos os dados e funções a estarem dentro de uma classe; como essa restrição não existe no TypeScript, não há necessidade delas. Uma classe com apenas uma única instância normalmente é representada apenas como um objeto normal em JavaScript/TypeScript.
 * 
 * Por exemplo, não precisamos de uma sintaxe de “classe estática” no TypeScript porque um objeto regular (ou mesmo uma função de nível superior) também fará o trabalho:
*/

//Classe "estática" desnecessária
//definmos uma class
class MyStaticClass{
    //menbros da class

    //definimos um metodo estatico da class
    //definimos uma propriedade estatica da class, so definimos o menbro estatico aqui, mas um menbro estatico não esta associado a uma instancia especifica da classe, mas sim a class
    //podem ser acessados através do próprio objeto construtor da class
    //menbros estaticos também podem usar os mesmos modificadores de visibilidade, como public, private, protected
    static doSomething() {

    }
}

// Preferido (alternativa 1)
//declara uma function
function doSomething() {

}

//Preferido (alternativa 2)
//declara um objeto anonimo e atribui a constante
//dentro do objeto possui um metodo
const MyHelperObject = {
    doSomething() {},
};