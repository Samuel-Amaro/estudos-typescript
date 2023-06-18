/**
 * * TIPOS GENÉRICOS(GENERICS TYPES)
 * 
 * Nas seções anteriores, criamos funções de identidade genéricas que funcionavam em vários tipos. Nesta seção, exploraremos o tipo das próprias funções e como criar interfaces genéricas.
 * 
 * O tipo de funções genéricas é igual ao das funções não genéricas, com os parâmetros de tipo listados primeiro, de forma semelhante às declarações de função:
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

//igual ao exemplo acima, mas usando arrow functions, functions anonimas
//declaramos um arrow function anonima, com um paramentro de tipo, e atribuimos a ela a identity3 que sera seu tipo, a arrow function tera o tipo da identity3
let myIdentity: <Type>(arg: Type) => Type = identity3;

/**
 * Também poderíamos ter usado um nome diferente para o parâmetro de tipo genérico no tipo, desde que o número de variáveis ​​de tipo e como as variáveis ​​de tipo são usadas estejam alinhados.
*/

//mudndo o nome do paramentro de tipo generico, mas tem que ter o mesmo numero de variaveis do tipo identity3 e como elas são usadas la sejam aqui tambem, tem que estar alinhados
let myIdentity2: <Input>(arg: Input) => Input = identity3;

/**
 * Também podemos escrever o tipo genérico como uma assinatura de chamada de um tipo literal de objeto:
*/

//declaramos um tipo de objeto anonimo que tem uma assinatura de chamada generica, do tipo da function identity3 
let myIdentity3: { <Type>(arg: Type): Type} = identity3;

/**
 * O que nos leva a escrever nossa primeira interface genérica. Vamos pegar o objeto literal do exemplo anterior e movê-lo para uma interface:
*/

//declaramos um tipo de objeto nomeado
interface GenericIdentityFn{
    //declaramos uma assinatura de chamada generica, que define um paramentro de tipo e retorna do mesmo tipo, define um paramentro do tipo Type
    //Type e fornecido pelo usuario
    <Type>(arg: Type): Type;
}

//declaramos um objeto do tipo GenericIdentityFn que e inicializdo com a identity3
let myIdentity4: GenericIdentityFn = identity3;

/**
 * Em um exemplo semelhante, podemos querer mover o parâmetro genérico para ser um parâmetro de toda a interface. Isso nos permite ver em que tipo(s) somos genéricos (por exemplo Dictionary<string>, em vez de apenas Dictionary). Isso torna o parâmetro de tipo visível para todos os outros membros da interface.
*/

//declaramos um tipo de objeto nomeado
//que define uum paramentro de tipo, uma variavel de tipo que fornece uma informação de tipo que vamos trabalhar neste objeto
interface GenericIdentityFn2<Type>{
    //declaramos uma assinatura de chamada não generica que necessita de um paramentro arg do tipo da varaivel Type e retorna o memso tipo
    (arg: Type): Type;
}

//declaramos um objeto do tipo GenericIdentityFn2<number>, que precisamos especificar o argumento de tipo correspondente nesse caso o tipo number, que e inicializdo com a identity3
let myIdentity5: GenericIdentityFn2<number> = identity3;

/**
 * Observe que nosso exemplo mudou para algo ligeiramente diferente. Em vez de descrever uma função genérica, agora temos uma assinatura de função não genérica que faz parte de um tipo genérico. Quando usamos GenericIdentityFn, agora também precisaremos especificar o argumento de tipo correspondente (aqui: number), bloqueando efetivamente o que a assinatura de chamada subjacente usará. Entender quando colocar o parâmetro de tipo diretamente na assinatura de chamada e quando colocá-lo na própria interface será útil para descrever quais aspectos de um tipo são genéricos.
 * 
 * Além de interfaces genéricas, também podemos criar classes genéricas. Observe que não é possível criar enums e namespaces genéricos.
*/