/**
 * * O READONLYARRAY TIPO
 * 
 *  O ReadonlyArray é um tipo especial que descreve arrays que não devem ser alterados.
*/

//declaramos uma function que define como paramentro um ReadonlyArray que aceita um paramentro de tipo, esse paramentro da function e um array que não pode ser alterado, e um array de somente leitura
function doStuff(values: ReadonlyArray<string>) {
    // Podemos ler de 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    //...mas não podemos mudar 'valores'.
    values.push("hello!");
}

/**
 * Muito parecido com o readonly modificador de propriedades, é principalmente uma ferramenta que podemos usar para intenção. Quando vemos uma função que retorna ReadonlyArrays, isso nos diz que não devemos alterar o conteúdo de forma alguma, e quando vemos uma função que consome ReadonlyArrays, isso nos diz que podemos passar qualquer array para essa função sem nos preocuparmos com isso. irá alterar o seu conteúdo.
 * 
 * Ao contrário de Array, não há um ReadonlyArray construtor que possamos usar.
*/

//new ReadonlyArray("red", "green", "blue");

/**
 * Em vez disso, podemos atribuir s regulares Array a ReadonlyArrays.
*/

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

/**
 *  Assim como o TypeScript fornece uma sintaxe abreviada para Array<Type> with Type[], ele também fornece uma sintaxe abreviada para ReadonlyArray<Type> with readonly Type[].
*/

//readonly type[] e uma sintaxe abreviada para ReadonlyArray<Type>, um paramentro de tipo pode ser fornecido ao tipo ReadonlyArray
//não podemos mudar o paramentro values, pois e um array de somente leitura, não aceita mudar e nem acrecentar valores 
function doStuff2(values: readonly string []) {
    // Podemos ler de 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    //...mas não podemos mudar 'valores'.
    values.push("hello!");
}

/**
 * Uma última coisa a observar é que, ao contrário do readonly modificador de propriedade, a atribuição não é bidirecional entre Arrays e s regulares ReadonlyArray.
*/

//readonly type[] e uma sintaxe abreviada para ReadonlyArray<Type>
//declara uma array de string que não pode mudar e nem acrescentar valores, e um arrya de somente leitura
let x1: readonly string[] = [];

//declara um array regular de strings que pode ser mudado e alterado
let y: string[] = [];

//podemos atribuir um array regular em um array somente leitura
x1 = y;

// mas não podemos atribuir um array somente leitura em um array regular
y = x1;