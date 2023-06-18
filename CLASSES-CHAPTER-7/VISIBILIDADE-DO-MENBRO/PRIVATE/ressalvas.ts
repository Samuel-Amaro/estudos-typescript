/**
 * * RESSALVAS
 * 
 *  Como outros aspectos do sistema de tipos do TypeScript, private e protected são aplicados apenas durante a verificação de tipos.
 * 
 * Isso significa que construções de tempo de execução do JavaScript como in ou pesquisa de propriedade simples ainda podem acessar um membro private ou protected:
*/

//define uma class
class MySafe{
    //campos da class

    //define uma propriedade inicilizada com um valor
    //a propriedade possui a visibilidade como private
    //private é como protected, mas não permite acesso ao membro mesmo de subclasses:
    private secretKey = 12345;
}

//declaramos uma nova instancia de objeto da class e atribuimos a s

//Em um JavaScript arquivo...
//a propriedade e acessivel
const s = new MySafe();
//Will print 12345
//console.log(s.secretKey);

/**
 * private também permite acesso usando a notação de colchetes durante a verificação de tipo. Isso torna os campos declarados privados potencialmente mais fáceis de acessar para coisas como testes de unidade, com a desvantagem de que esses campos são soft private e não reforçam estritamente a privacidade.
*/

// Não permitido durante a verificação de tipo
//tentando acessar uma propriedade privada
console.log(s.secretKey);

//OK
//mas temos uma falaha aqui, podemos acessar uma proriedade privada usando a notação de colchetes, durante a verificação de tipo
console.log(s["secretKey"]);

/**
 * Ao contrário do TypeScripts , os campos privados private do JavaScript ( ) permanecem privados após a compilação e não fornecem as saídas de escape mencionadas anteriormente, como acesso à notação de colchetes, tornando-os hard private .#
*/

//Em um JavaScript arquivo
//definimos uma class 

class Dog{
    //campos da classe

    //definimos uma propriedade privada inicializada com valor 0
    #barkAmount = 0;
    personality = "happy";

    //define um metodo construtor
    constructor() {}
}

"use strict";
class Dog2 {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}
 
/**
 * Ao compilar para ES2021 ou menos, o TypeScript usará WeakMaps no lugar de #.
*/

"use strict";
var _Dog_barkAmount;
class Dog3 {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
_Dog_barkAmount = new WeakMap();

/**
 * Se você precisar proteger valores em sua classe de agentes mal-intencionados, deverá usar mecanismos que ofereçam privacidade de tempo de execução rígida, como fechamentos, WeakMaps ou campos privados. Observe que essas verificações de privacidade adicionadas durante o tempo de execução podem afetar o desempenho.
*/