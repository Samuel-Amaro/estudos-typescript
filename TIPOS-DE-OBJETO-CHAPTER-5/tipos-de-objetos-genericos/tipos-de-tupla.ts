/**
 * * TIPOS DE TUPLA
 * 
 *  Um tipo de tupla é outro tipo de Array tipo que sabe exatamente quantos elementos contém e exatamente quais tipos contém em posições específicas.
*/

//declaramos um novo tipo de Array, que aceita dois elementos um do tipo string e do tipo number
//e um tipo de array tupla, sabe exatamente quantos elementos contem e exatamente quantos tipos contem em posicoes especificas
//aqui o tipo StringNumberPair e um tipo de tupla de string e number
type StringNumberPair = [string, number];

/**
 * Aqui, StringNumberPair é um tipo de tupla de string e number. Assim como ReadonlyArray, ele não tem representação em tempo de execução, mas é significativo para o TypeScript. Para o sistema de tipos, StringNumberPair descreve arrays cujo 0 índice contém a string e cujo 1 índice contém a number.
*/

//declara uma function que aceita como paramentro um tipo de array de tupla de string e number
//a tupla sabe exatamente quantos elementos contem e exatamente quantos tipos contem em posicoes especificas
function doSomething(pair: [string, number]) {
    const a = pair[0]; //indice 0 contem string
    const b = pair[1]; //indice 1 contem number
    //...
}

//chamando a function e fornecendo como arguento um tupla com string e number
doSomething(["hello", 42]);

/**
 * Se tentarmos indexar além do número de elementos, obteremos um erro.
*/

function doSomething2(pair: [string, number]) {
    //...
    //tentando indexar alem do numero de elementos, obtemos um erro
    const c = pair[2];
}

doSomething2(["hello", 42]);

/**
 * Também podemos desestruturar tuplas usando a desestruturação de array do JavaScript.
*/

function doSomething3(stringHash: [string, number]) {
    //desestruturando uma tupla, em variaveis individuais
    const [inputString, hash] = stringHash;

    console.log(inputString);

    console.log(hash);
}

/**
 * Os tipos de tupla são úteis em APIs fortemente baseadas em convenções, onde o significado de cada elemento é “óbvio”. Isso nos dá flexibilidade em qualquer nome que quisermos para nossas variáveis ​​quando as desestruturarmos. No exemplo acima, pudemos nomear os elementos 0 e 1 o que quiséssemos.
 * 
 * No entanto, como nem todo usuário tem a mesma visão do que é óbvio, pode valer a pena reconsiderar se o uso de objetos com nomes de propriedade descritivos pode ser melhor para sua API.
 * 
 * Além dessas verificações de comprimento, tipos de tupla simples como esses são equivalentes a tipos que são versões de Arrays que declaram propriedades para índices específicos e que declaram length com um tipo literal numérico.
*/

//declaramos um tipo de objeto nomeado
interface StringNumberPair2{
    //declara propriedades especializadas
    length: 2;
    //declarando propriedadeds para indices especificos
    //aqui declaramos que o indice 0, que e uma propriedade do objeto, contera um valor do tipo string
    0: string;
    //aqui contera um tipo number
    1: number;

    //um metodo
    //Outro 'Array<string | number> members...
    //que declara dois paramentros opcionais, e retorna um array do tipo number ou string
    slice(start?: number, end?: number): Array<string | number>;
}

/**
 * Outra coisa que você pode estar interessado é que as tuplas podem ter propriedades opcionais escrevendo um ponto de interrogação ( ? após o tipo de um elemento). Os elementos opcionais da tupla só podem vir no final e também afetam o tipo de length.
*/

//declaramos um novo tipo de array
//que aceita 3 elementos do tipo number, mas o 3 elemento e opcional, os elementos opcionais da tupla so podem vir no final e também afetam o tipo de length
//aqui declaramos um tupla de number, uma tupla e um tipo de array, sabe exatamente quantos elementos contem e exatamente quantos tipos contem em posicoes especificas
type Either2dOr3d = [number, number, number?];

//declara uma function regular que aceita como paramentro uma tupla do tipo Either2dOr3d
function setCoodinate(coord: Either2dOr3d) {
    //desestruturamos a tupla em elementos individuais, em variaveis, sabendo que o 3 elemeneto pode ou não exisitir na variavel z pois e opcional
    const [x, y, z] = coord;

    console.log(`Provided coordinates had ${coord.length} dimensions`);
}

/**
 * As tuplas também podem ter elementos rest, que devem ser do tipo array/tupla.
*/

//declaramos um novo tipo de array
//que aceita 3 elementos, o primeiro e do tipo string, o segundo number, o terceiro aceita um array de elementos boolean, que serão desestrutura em elementos individuais para seream adicionados no nosso tipo, pode ter qualquer numero de booleans seguintes
//declaramos outra tupla, que aceita paramentros rest, que são destruturados em elementos individuais e add no novo tipo de tupla, o paramentro rest tem que ter o tipo array/tupla
//aqui declaramos um tupla, uma tupla e um tipo de array, sabe exatamente quantos elementos contem e exatamente quantos tipos contem em posicoes especificas
//descreve um tipo de tupla
type StringNumberBooleans = [string, number, ...boolean[]];
//declaramos outra tupla, que aceita paramentros rest, que são destruturados em elementos individuais e add no novo tipo de tupla
//descreve um outro tipo de tupla
type StringBooleansNumber = [string, ...boolean[], number];
//descreve um outro tipo de tupla 
type BooleansStringNumber = [...boolean[], string, number];

/**
 * StringNumberBooleans descreve uma tupla cujos dois primeiros elementos são string e number respectivamente, mas que pode ter qualquer número de booleans seguintes.
 * 
 * StringBooleansNumber descreve uma tupla cujo primeiro elemento é string e, em seguida, qualquer número de booleans e terminando com a number.
 * 
 * BooleansStringNumber descreve uma tupla cujos elementos iniciais são qualquer número de booleans e terminam com a stringentão a number.
 * 
 * Uma tupla com um elemento rest não tem um “comprimento” definido - ela possui apenas um conjunto de elementos conhecidos em diferentes posições.
*/

//declaramos uma tupla do tipo StringNUmberBooleans, passando somente dois elementos uma string e um number
const a: StringNumberBooleans = ["hello", 1];

//declarmaos uma tupla do mesmo tipo acima, passando 3 elementos, uma string, number e um boolean
const b: StringNumberBooleans = ["beautiful", 2, true];

//uma tupla do mesmo tipo acima, passando varios  elementos, uma string, number e um rest de booleans
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

/**
 * Por que os elementos opcionais e de rest podem ser úteis? Bem, permite que o TypeScript corresponda tuplas com listas de parâmetros. Tipos de tuplas podem ser usados ​​em parâmetros e argumentos rest , de modo que o seguinte:
*/

//declara uma function regular
//que declara um paramentro chamado args, que e um rest paramentro, aceita um numero arbitrario de paramentros, o rest parameter e do tipo tupla, que aceita um elemento string e um number, e aceita qualquer numero de boleans seguintes
//podemos usar tuplas em paramentros e argmentos rest
function readButtonInput(...args: [string, number, ...boolean[]]) {
    //desetrutura o args em variaveis individuais, mas como sei o numero de variaveis a usar ? graças a tupla podemos definir um tipo e saber o numero definido de elementos e seus tipos
    const [name, version, ...input] = args;
    //...
}

/**
 * é basicamente equivalente a:
*/

//declara uma function que aceita, paramentros normais, e uum rest paramentro, com um numero indefinido de booleans
function readButtonInput2(name: string, version: number, ...input: boolean[]) {
    //...
}

/**
 * Isso é útil quando você deseja obter um número variável de argumentos com um parâmetro rest e precisa de um número mínimo de elementos, mas não deseja introduzir variáveis ​​intermediárias.
*/