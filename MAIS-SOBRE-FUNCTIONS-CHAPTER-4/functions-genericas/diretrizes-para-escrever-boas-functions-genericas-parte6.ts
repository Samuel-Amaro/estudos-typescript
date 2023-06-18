/**
 * * DIRETRIZES PARA ESCREVER BOAS FUNÇÕES GENÉRICAS
 * 
 *  Escrever funções genéricas é divertido e pode ser fácil se deixar levar pelos parâmetros de tipo. Ter muitos parâmetros de tipo ou usar restrições onde eles não são necessários pode tornar a inferência menos bem-sucedida e frustrar os chamadores de sua função.
 * 
 * * Empurre os parâmetros de tipo para baixo
 * 
 * Aqui estão duas maneiras de escrever uma função que parecem semelhantes:
*/

//OBS: MELHOR MANEIRA DE ESCREVER A FUNCTION
//declaramos uma function regular
//que possui um paramentro arr de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores
//O tipo foi inferido - escolhido automaticamente - pelo TypeScript.
//a function possui seu tipo de retorna inferido por Type
//não precisamos especificar tipos nos paramentros ou retornos
function firstElement1<Type>(arr: Type[]) {
    //retorna primeiro elemento do array
    return arr[0];
}

//OBS: Ter muitos parâmetros de tipo ou usar restrições onde eles não são necessários pode tornar a inferência menos bem-sucedida e frustrar os chamadores de sua função
//declaramos outra function regular 
//usando uma restrição para limitar os tipos de tipos que um parâmetro de tipo pode aceitar.
//Restringimos o parâmetro de tipo a esse tipo escrevendo uma extends cláusula
//restringimos que o tipo de valor aceito pela function por paramentro pode ser de qualquer tipo
function firstElement3<Type extends any[]>(arr: Type) {
    return arr[0];
}

//a: number (bom)
//retorna um number
const a = firstElement1([1, 2, 3]);

//b: qualquer(ruim)
const b = firstElement3([1, 2, 3]);

/**
 * Eles podem parecer idênticos à primeira vista, mas firstElement1 é uma maneira muito melhor de escrever essa função. Seu tipo de retorno inferido é Type, mas firstElement2 o tipo de retorno inferido de é any porque o TypeScript precisa resolver a arr[0]expressão usando o tipo de restrição, em vez de “esperar” para resolver o elemento durante uma chamada.
 * 
 * Regra : quando possível, use o próprio parâmetro de tipo em vez de restringi-lo
*/