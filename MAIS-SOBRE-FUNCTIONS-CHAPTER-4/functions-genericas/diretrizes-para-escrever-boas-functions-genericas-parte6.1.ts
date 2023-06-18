/**
 * * USE MENOS PARÂMENTROS DE TIPO
 * 
 * Aqui está outro par de funções semelhantes:
*/

//DIRETRIZES PARA ESCREVER BOAS FUNCTIONS GENERICAS: USAR MENOS PARAMENTROS DE TIPO
//OBS: BOM
//declaramos uma function regular
//que possui dois paramentro de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores
//O tipo generico foi inferido - escolhido automaticamente - pelo TypeScript.
//não precisamos especificar tipos nos paramentros ou retornos
//primeiro paramentro arr e um array que possa ter elementos do tipo Type
//segundo argumento func, e uma expressão de function com um argumento arg de tipo Type e retorna um boolean
//a function regular tem seu retorno inferido por Type, retorna um array com elementos do tipo Type
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

//DIRETRIZES PARA ESCREVER BOAS FUNCTIONS GENERICAS: USAR MENOS PARAMENTROS DE TIPO
//OBS: RUIM, os paramentros não se relacionam
//declaramos outra function regular 
//usando uma restrição para limitar os tipos de tipos que um parâmetro de tipo pode aceitar.
//Restringimos o parâmetro de tipo a esse tipo escrevendo uma extends cláusula
//restringimos que o tipo de valor aceito pela function por paramentro pode ser de qualuqer tipo para elementos do array arr, mas para o paramentro func, tem que ser o tipo de uma expressão de funcção com paramentro arg de tipo Type e retorna um boolean
function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func);
}

/**
 * Criamos um parâmetro de tipo Func que não relaciona dois valores . Isso é sempre uma bandeira vermelha, porque significa que os chamadores que desejam especificar argumentos de tipo precisam especificar manualmente um argumento de tipo extra sem motivo. Func não faz nada além de tornar a função mais difícil de ler e raciocinar!
 * 
 * Regra : Sempre use o mínimo possível de parâmetros de tipo
*/