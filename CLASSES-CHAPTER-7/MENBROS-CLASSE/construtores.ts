/**
 * * CONSTRUTORES(CONSTRUCTORS)
 * 
 * Os construtores de classe são muito semelhantes às funções. Você pode adicionar parâmetros com anotações de tipo, valores padrão e sobrecargas:
*/

//declaramos uma class nomeada
class Point3{
    //declaração de propriedades publicas gravaveis
    //declaramos propriedades do tipo number
    x: number;
    y: number;

    // Assinatura normal com padrões
    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    //para criar e iniciar um objeto pela classe precisamos fornecer dois paramentros do tipo number, aqui especiamos valores padrões nos paramentros
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

//declaramos uma class nomeada
class Point4{
    //sobrecargas de construtores
    //declaramos uma assinatura de sobrecarga, uma forma de criar e iniciar um objeto pela class
    constructor(x: number, y: string);
    //outra assinatura de sobrecarga, especificando outra forma de criar e iniciar um objeto pela class
    constructor(s: string);
    //declaramos uma assinatura de sobrecarga de implementação, onde implementamos o construtror
    constructor(xs: any, y?: any) {
        //TBD
    }
}

/**
 * Existem apenas algumas diferenças entre assinaturas de construtor de classe e assinaturas de função:
 * 
    *  Os construtores não podem ter parâmetros de tipo(GENERICOS) - eles pertencem à declaração de classe externa, sobre a qual aprenderemos mais tarde
    * 
    * Os construtores não podem ter anotações de tipo de retorno(GENERICO) - o tipo de instância da classe é sempre o que é retornado
    * 
 * *  SUPPER CALLS(SUPER CHAMADAS)
 * 
 * Assim como no JavaScript, se você tiver uma classe base, precisará chamar super(); o corpo do construtor antes de usar qualquer this.membro:
*/

//declaramos uma class nomeada
class Base{
    //declação de campos
    k = 4;
}

//A extends palavra-chave é usada em declarações de classe ou expressões de classe para criar uma classe como filha de outra classe.
//criamos uma classe filha, uma sub classe, da classe Base
class Derived extends Base{
    constructor() {
        // Imprime um valor errado no ES5; lança exceção no ES6
        console.log(this.k);
        //Se houver um construtor presente na subclasse, ele precisará primeiro chamar super() antes de usar "this".
        super();
    }
}

/**
 * Esquecer de chamar superé um erro fácil de cometer em JavaScript, mas o TypeScript dirá quando for necessário.
*/