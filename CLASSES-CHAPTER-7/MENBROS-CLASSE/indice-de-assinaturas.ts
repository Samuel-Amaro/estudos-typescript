/**
 * * ÍNICE DE ASSINATURAS
 * 
 *  As classes podem declarar assinaturas de índice; eles funcionam da mesma forma que as assinaturas de índice para outros tipos de objeto :
*/

//definimos uma class
class MyClass{
    //declaramos campos da class
    //definimos uma assinatura de indice do tipo string que aceita valores como um boolean ou uma arrow function com um paramento do tipo string que retorna um boolean
    //aqui definimos uma assinatura de index para uma proprieade o tipo boolean ou uma arrow function
    //que pode ser acessada por meio e uma string index 
    [s: string]: boolean | ((s: string) => boolean);

    //declara um metodo da classe
    //o metodo define o paramentro s como do tipo string
    check(s: string) {
        //acessamos a propriedade por meio do index s, como uma proprieade computada, e definimos seu tipo para boolean
        return this[s] as boolean;
    }
}

/**
 * Como o tipo de assinatura de índice também precisa capturar os tipos de métodos, não é fácil usar esses tipos de maneira útil. Geralmente é melhor armazenar dados indexados em outro lugar ao invés de na própria instância da classe.
*/