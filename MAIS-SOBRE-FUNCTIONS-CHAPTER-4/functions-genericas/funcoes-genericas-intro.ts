/**
 * * FUNCÕES GENÉRICAS
 * 
 *  É comum escrever uma função em que os tipos de entrada se relacionam com o tipo de saída ou em que os tipos de duas entradas estão relacionados de alguma forma. Vamos considerar por um momento uma função que retorna o primeiro elemento de um array:
*/

//declara uma function que declara um paramentro chamado arr que e do tipo array que aceita elementos de qualquer tipo
function firstElement(arr: any[]) {
    return arr[0];
}

/**
 * Essa função faz o seu trabalho, mas infelizmente tem o tipo de retorno any. Seria melhor se a função retornasse o tipo do elemento do array.
 * 
 * No TypeScript, os genéricos são usados ​​quando queremos descrever uma correspondência entre dois valores. Fazemos isso declarando um parâmetro de tipo na assinatura da função:
*/

//declaramos uma function regular
//que possui um paramentro de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores
//o paramentro arr e do tipo Type um array que podee ter elementos do tipo Type, type pode corresponder a qualquer tipo porque ele e um generico
function firstElement2<Type>(arr: Type[]): Type | undefined {
    //retorna o primeiro elemento do arr, se possuir retorna o Type generico se não retorna undefined
    return arr[0];
}

/**
 * Ao adicionar um parâmetro de tipo Type a essa função e usá-lo em dois locais, criamos um link entre a entrada da função (o array) e a saída (o valor de retorno). Agora, quando o chamamos, um tipo mais específico aparece:
*/

//s e do tipo 'string'
const s = firstElement(["a", "b", "c"]);

//n e do tipo 'number'
const n = firstElement([1, 2, 3]);

//u is do type undefined
const u = firstElement([]);