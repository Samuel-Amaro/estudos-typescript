/**
 * * THIS PARÂMETROS
 * 
 * Em uma definição de método ou função, um parâmetro inicial nomeado this tem um significado especial no TypeScript. Esses parâmetros são apagados durante a compilação:
*/

//Entrada do TypeScript com o parâmetro 'this'
function fn(this: SomeType, x: number) {
    /* ... */

}

//JavaScript saida
function fn2(x) {
/* ... */
}

/**
 * O TypeScript verifica se a chamada de uma função com um this parâmetro é feita com um contexto correto. Em vez de usar uma função de seta, podemos adicionar um this parâmetro às definições do método para impor estaticamente que o método seja chamado corretamente:
*/

//definimos uma class
class MyClass5{
    //menbros da class

    //definimos uma propriedade da class inicializda com um valor, com visibildiade publica
    name = "MyClass";

    //definimos um metodo que recebe como paramentro o this: que pode ser uma instancia de objeto da class
    //Em uma definição de método ou função, um parâmetro inicial nomeado this tem um significado especial no TypeScript.
    //O TypeScript verifica se a chamada de uma função com um this parâmetro é feita com um contexto correto. Em vez de usar uma função de seta, podemos adicionar um this parâmetro às definições do método para impor estaticamente que o método seja chamado corretamente:
    getName(this: MyClass5) {
        return this.name;
    }
}

//declaramos uma nova instancia de objeto
//e atribuimos a c
const c3 = new MyClass5();
//OK
//chamamos o metodo 
c3.getName();

//Erro, travaria
const g2 = c3.getName;
console.log(g2());

/**
 * Este método faz as compensações opostas da abordagem de função de seta:
 * 
    *  Os chamadores de JavaScript ainda podem usar o método de classe incorretamente sem perceber
    * 
    * Apenas uma função por definição de classe é alocada, em vez de uma por instância de classe
    * 
    * As definições do método base ainda podem ser chamadas via super.
*/