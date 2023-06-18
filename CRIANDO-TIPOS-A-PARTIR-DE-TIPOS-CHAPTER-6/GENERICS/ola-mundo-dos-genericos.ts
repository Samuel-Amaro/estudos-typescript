/**
 * * OLÁ MUNDO DOS GENÉRICOS
 * 
 * Para começar, vamos fazer o “olá mundo” dos genéricos: a função identidade. A função de identidade é uma função que retornará tudo o que for passado. Você pode pensar nisso de maneira semelhante ao echo comando.
 * 
 * Sem os genéricos, teríamos que dar um tipo específico à função de identidade:
*/

//OBS: SEM GENERICOS
//declaramos uma function regular que declara um paramentro chamado arg do tipo number, a function retorna um number, também
//a function indentidade e uma function que retornara tudo o que for passado
function identity(arg: number): number{
    return arg;
}

/**
 * Ou poderíamos descrever a função de identidade usando o any tipo:
*/

//mudando o tipo do paramentro para any, para receber qualquer tipo
function identity2(arg: any): number {
    return arg;
} 

/**
 * Embora using any seja certamente genérico, pois fará com que a função aceite todo e qualquer tipo para o tipo de arg, na verdade estamos perdendo as informações sobre qual era esse tipo quando a função retorna. Se passamos um número, a única informação que temos é que qualquer tipo pode ser retornado.
 * 
 * Em vez disso, precisamos de uma forma de capturar o tipo do argumento de forma que também possamos usá-lo para denotar o que está sendo retornado. Aqui, usaremos uma variável de tipo , um tipo especial de variável que funciona com tipos em vez de valores.
*/

//precisamos de uma forma de capturar o tipo do argumento de forma que possamos usá-lo para denotar o que esta sendo retornado
//usaremos aqui uma variável de tipo,
//um tipo especial de variavel que funciona com tipos em vez de valores
//adicionamos uma variavel de tipo Type a function
//a Type variavel nos permite capturar o tipo que o usuario fornece para que possamos usar essa informacao posteriormente
//aqui usamos para forcecer o tipo de retorno da function, sera igual ao tipo de argumento fornecido
//esta versão da function identity e generica pois funciona em varios tipos
function identity3<Type>(arg: Type): Type{
    return arg;
}

/**
 * Agora adicionamos uma variável de tipo Type à função de identidade. Isso Type nos permite capturar o tipo que o usuário fornece (por exemplo number, ), para que possamos usar essa informação posteriormente. Aqui, usamos Type novamente como o tipo de retorno. Na inspeção, agora podemos ver que o mesmo tipo é usado para o argumento e o tipo de retorno. Isso nos permite trafegar esse tipo de informação de um lado da função e sair do outro.
 * 
 * Dizemos que esta versão da identity função é genérica, pois funciona em vários tipos. Ao contrário de usar any, também é tão preciso (ou seja, não perde nenhuma informação) quanto a primeira identity função que usava números para o argumento e o tipo de retorno.
 * 
 * Depois de escrever a função de identidade genérica, podemos chamá-la de duas maneiras. A primeira maneira é passar todos os argumentos, incluindo o argumento de tipo, para a função:
*/

//primeira maneira de chamar a function identity generica
//passando todos os argumentos, incluindo o argumento de tipo para a function
//fornecemos um argumento de tipo do tipo string para que a function possa usar essa informacao, e fornecemos o argumento para a function
let output = identity3<string>("myString");

/**
 * Aqui, definimos explicitamente Type como string um dos argumentos para a chamada de função, denotado usando o <> ao redor dos argumentos em vez de ().
 * 
 * A segunda maneira também é talvez a mais comum. Aqui usamos inferência de argumento de tipo — ou seja, queremos que o compilador defina o valor de Type para nós automaticamente com base no tipo de argumento que passamos:
*/

//segunda maneira de chamar a function generica identity  e talvez a mais comun
//usando a inferencia de argumento de tipo
//o compilador definira o valor de Type variavel de tipo na function para nos automaticamente com base no tipo de argumento que passamos
//o compilador apenas olha para o valor "myString" e definiu Type seu tipo
let output2 = identity3("myString");

/**
 * Observe que não precisamos passar explicitamente o tipo entre os colchetes angulares ( <>); o compilador apenas olhou para o valor "myString"e definiu Type seu tipo. Embora a inferência de argumento de tipo possa ser uma ferramenta útil para manter o código mais curto e mais legível, pode ser necessário passar explicitamente os argumentos de tipo como fizemos no exemplo anterior quando o compilador falha ao inferir o tipo, como pode acontecer em exemplos mais complexos .
*/