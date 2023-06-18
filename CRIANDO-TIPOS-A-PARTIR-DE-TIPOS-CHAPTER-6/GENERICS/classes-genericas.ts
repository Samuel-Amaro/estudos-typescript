/**
 * * CLASS GENÉRICAS(GENERIC CLASSES)
 * 
 * Uma classe genérica tem uma forma semelhante a uma interface genérica. As classes genéricas têm uma lista de parâmetros de tipo genérico entre colchetes angulares ( <>) após o nome da classe.
*/

//declaramos uma class generica, que define um paramentro de tipo generico entre os colchetes angulares <> apos o nome da classe
//Assim como na interface, colocar o parâmetro de tipo na própria classe nos permite garantir que todas as propriedades da classe estejam funcionando com o mesmo tipo.
class GenericNumber<NumType>{
    //declara propriedades e metodos
    //declara uma propriedade do tipo da variavel de Tipo
    zeroValue: NumType;
    //declara um metodo da class
    //o metodo define dois paramentros do tipo da variavel de tipo e retorna o mesmo tipo
    add: (x: NumType, y: NumType) => NumType;
}

//declaramos uma instancia da class generica, fornecendo como paramentro de tipo um tipo number
let myGenericNumber = new GenericNumber<number>();
//inicializamos propriedade
myGenericNumber.zeroValue = 0;
//inicializamos a propriedade add fornecendo um function anonima com dois parametros e retorna um valor
myGenericNumber.add = function(x, y) {
    return x + y;
};

/**
 * Este é um uso bastante literal da GenericNumber classe, mas você deve ter notado que nada a está restringindo a usar apenas o number tipo. Em vez disso, poderíamos ter usado string ou objetos ainda mais complexos.
 * 
*/

//declaramos uma instancia da class generica, fornecendo como paramentro de tipo um tipo string
let stringNumeric = new GenericNumber<string>();
//inicializamos propriedade com um vlaor
stringNumeric.zeroValue = "";
//inicializamos a propriedade add fornecendo um function anonima com dois parametros e retorna um valor
stringNumeric.add = function(x, y) {
    return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "teste"));

/**
 * Assim como na interface, colocar o parâmetro de tipo na própria classe nos permite garantir que todas as propriedades da classe estejam funcionando com o mesmo tipo.
 * 
 * Conforme abordamos em nossa seção sobre classes , uma classe tem dois lados em seu tipo: o lado estático e o lado da instância. Classes genéricas são apenas genéricas em seu lado de instância, e não em seu lado estático, portanto, ao trabalhar com classes, membros estáticos não podem usar o parâmetro de tipo da classe.
*/