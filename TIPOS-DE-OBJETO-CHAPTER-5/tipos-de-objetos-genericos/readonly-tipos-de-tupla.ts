/**
 * * O READONLY(SOMENTE LEITURA) TIPOS DE TUPLA 
 * 
 * Uma observação final sobre os tipos de tuplas - os tipos de tuplas têm readonly variantes e podem ser especificados colocando um readonly modificador na frente delas - assim como na sintaxe abreviada de array.
*/

//declara uma function regular que define o paramentro pair
//o paramentro pair e do tipo tupla, um array com um numero definido de elmeneots e seus tipos, aqui declaramos uma tupla de somente leitura, não pode ser modificada
//e um tipo de array tupla, sabe exatamente quantos elementos contem e exatamente quantos tipos contem em posicoes especificas
function doSomething(pair: readonly [string, number]) {
    //...
}

/**
 * Como você pode esperar, escrever em qualquer propriedade de uma readonly tupla não é permitido no TypeScript.
*/

function doSomething2(pair: readonly [string, number]) {
    //como esperado não podemos alterar valores nas propriedades de uma readonly tupla, ela e somente leitura não permite gravação durante a verificaçõ de tipos estatico
    pair[0] = "hello!";
}

/**
 * Tuplas tendem a ser criadas e não modificadas na maioria dos códigos, então anotar tipos como readonly tuplas quando possível é um bom padrão. Isso também é importante, pois os literais de array com const asserções serão inferidos com readonly tipos de tupla.
*/

//usando assersoções de tipo, você pode usar uma declaração de tipo para especificar um tipo mais específico:
//aqui declaramos um array anonimo inicialziado com dois elementos
//usamos uma asserção de tipo para especificar um tipo mais especifico, como const
let point = [3, 4] as const;

//declara uma function regular 
//que tem como paramentro uma sintaxe padrão de desestruturação de array, aceita uma tupla como paramentro, que define dois elementos do tipo number, que serão desestrururados para dois itens individuais que poderaão ser acessados no corpo da function
function distaceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}

//chama function pasando como argumento a constante de array point, lembrando que uma array constante e como uma readonly array, que e do tipo somente leitura, onde não podemos gravar valores,
//assim não podemos passar point como argumento porque ele e desestrutura e atribuido em novas variaveis, assim não da
distaceFromOrigin(point);

/**
 * Aqui, distanceFromOrigin nunca modifica seus elementos, mas espera uma tupla mutável. Como point o tipo de foi inferido como readonly [3, 4], ele não será compatível, [number, number] pois esse tipo não pode garantir point que os elementos de não sofrerão mutações.
*/

