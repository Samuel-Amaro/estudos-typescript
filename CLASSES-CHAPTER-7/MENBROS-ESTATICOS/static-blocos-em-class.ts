/**
 * * STATIC BLOCOS EM CLASS
 * 
 * Os blocos estáticos permitem que você escreva uma sequência de instruções com seu próprio escopo que pode acessar campos privados dentro da classe que os contém. Isso significa que podemos escrever o código de inicialização com todos os recursos de escrita de instruções, sem vazamento de variáveis ​​e acesso total aos componentes internos de nossa classe.
*/

//definimos uma class
class Foo{
    //menbros da class

    //definimos uma propriedade statica com visibilidade privada inicialziada com valor 0
    static #count = 0;

    //definimos um metodo acessor da propriedade estatica count
    get count() {
        return Foo.#count;
    }

    //definmos um bloco estatico
    //Os blocos estáticos permitem que você escreva uma sequência de instruções com seu próprio escopo que pode acessar campos privados dentro da classe que os contém.
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        } catch {
            
        }
    }
}