/**
 * * ASSINATURAS DE CHAMADA(Call Signatures)
 * 
 *  Em JavaScript, as funções podem ter propriedades além de serem chamadas. No entanto, a sintaxe da expressão do tipo de função não permite a declaração de propriedades. Se quisermos descrever algo que pode ser chamado com propriedades, podemos escrever uma assinatura de chamada em um tipo de objeto:
*/

//definimos um tipo de objeto anonimo chamado DescribableFunction, que pode ser chamado como uma function que possui propriedadeds
type DescribableFunction = {
    //definimos as seguintes propriedades no objeto
    //description propriedade do tipo string
    description: string;
    //aqui definimos uma assinatura de chamada em um tipo de objeto, permitindo ser chamado como uma function que possui propriedades
    //definimos uma function propriedade que define o paramentro someArg do tipo number e retorna um boolean
    (someArg: number): boolean;
};

//definimos uma function regular que possui um paramentro fn do tipo do objeto DescribableFunction
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

/**
 * Observe que a sintaxe é um pouco diferente em comparação com uma expressão de tipo de função - use : entre a lista de parâmetros e o tipo de retorno em vez de =>.
*/