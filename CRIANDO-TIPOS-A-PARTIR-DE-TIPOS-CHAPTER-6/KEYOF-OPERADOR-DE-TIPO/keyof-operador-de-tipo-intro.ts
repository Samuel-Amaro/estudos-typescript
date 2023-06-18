/**
 * * O KEYOF(CHAVE DE) OPERADOR DE TIPO 
 * 
 * O keyof operador pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves. O seguinte tipo P é o mesmo tipo que “x” | "s":
*/

//declara um novo tipo chamado Point, que e um objeto literal anonimo com duas propriedades
type Point = {x: number; y: number};

//define um novo tipo chamado P
//definindo um novo tipo a partir do operador de tipo keyof
//usando o operador de tipo no objeto Point
//o keyof operador de tipo
//pega o tipo de objeto e produz uma string ou union literal number de suas chaves
type P = keyof Point;

/**
 * Se o tipo tiver uma assinatura de índice string ou number, keyof retornará esses tipos: 
*/

//usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
//a proprieade e do tipo number e o valor da propriedade e desconhecido
//esta assinatura de index afirma que quando Arrayish e indexado com a number, ele retornara a uncknow
//declaramos um novo tipo chamado Arrayish
type Arrayish = {[n: number]: unknown};
//usando o operador de tipo keyof pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves.
//ele retorna um union literal number da key
//definindo um novo tipo a partir do operador de tipo keyof
type A = keyof Arrayish;

//mesma coisa do exemplo acima
//assinatura de index do tipo string e o tipo da propriedade e boolean
//declara um novo tipo
type Mapish = {[k: string]: boolean};
//usando o operador de tipo keyof, ele retorna um union tipo com string e number
type M = keyof Mapish;

/**
 * Observe que, neste exemplo, M is string | number — isso ocorre porque as chaves do objeto JavaScript são sempre convertidas para uma string, portanto, obj[0] é sempre igual a obj["0"].
 * 
 * keyof os tipos tornam-se especialmente úteis quando combinados com tipos mapeados, sobre os quais aprenderemos mais adiante.
*/