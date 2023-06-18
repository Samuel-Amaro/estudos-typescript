/**
 * * RELACÕES ENTRE CLASS
 * 
 *  Na maioria dos casos, as classes em TypeScript são comparadas estruturalmente, da mesma forma que outros tipos.
 * 
 * Por exemplo, essas duas classes podem ser usadas no lugar uma da outra porque são idênticas:
*/

//definimos class
//class identicas
class Point1{
    //menbros da class

    //propriedades da class inicializada com valor
    x = 0;
    y = 0;
}

//definimos class
//class identicas
class Point2{
    //menbros da class

    //propriedades da class inicializada com valor
    x = 0;
    y = 0;
}

//OK
// Na maioria dos casos, as classes em TypeScript são comparadas estruturalmente, da mesma forma que outros tipos.
//declaramos uma constante do tipo da class 1, mas instanciamos um objeto da class 2, as duas class estruturalmente são iguais
const p: Point1 = new Point2();

/**
 * Da mesma forma, existem relacionamentos de subtipos entre classes mesmo que não haja herança explícita:
*/

//declaramos uma class
class Person{
    //menbros da class

    //declaramos propriedades da class e seus tipos, propriedades com visibilidade publica
    name: string;
    age: number;
}

//declaramos uma class
class Employee{
    //menbros da class

    //declaramos propriedades da class e seus tipos, propriedades com visibilidade publica
    name: string;
    age: number;
    salary: number;
}

//OK
//relacionamento de subtipo mesmo que não haja herança
const p: Person = new Employee();

/**
 * Isso parece simples, mas há alguns casos que parecem mais estranhos do que outros.
 * 
 * Classes vazias não têm membros. Em um sistema de tipo estrutural, um tipo sem membros geralmente é um supertipo de qualquer outra coisa. Então, se você escrever uma classe vazia (não!), qualquer coisa pode ser usada no lugar dela:
*/

//definimos uma class vazia
class Empty{

}

function fn(x: Empty) {
    //não posso fazer nada com 'x', então não vou
}

//TUDO OK
fn(window);
fn({});
fn(fn);