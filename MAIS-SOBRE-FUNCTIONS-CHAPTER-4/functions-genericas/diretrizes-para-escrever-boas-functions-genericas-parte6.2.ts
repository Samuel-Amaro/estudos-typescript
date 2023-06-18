/**
 * * PARÂMETROS DE TIPO DEVEM APARECER DUAS VEZES
 * 
 * Às vezes esquecemos que uma função pode não precisar ser genérica:
*/

//declaramos uma function regular
//que possui um paramentro de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores
//O tipo generico foi inferido - escolhido automaticamente - pelo TypeScript.
//não precisamos especificar tipos nos paramentros ou retornos
//usando uma restrição para limitar os tipos de tipos que um parâmetro de tipo pode aceitar.
//Restringimos o parâmetro de tipo a esse tipo escrevendo uma extends cláusula
//restringimos que o tipo de valor aceito pela function por paramentro pode ser do tipo string
//primeiro paramentro s e do tipo Str que e uma restrição do tipo generico
function greet<Str extends string>(s: Str) {
    console.log("Heelo, " + s);
}

greet("world");

/**
 * Poderíamos facilmente ter escrito uma versão mais simples:
*/

//declara uma function regular sem ser generica
//add anotações de tipo de paramentro 
function greet2(s: string) {
    console.log("Hello, " + s);
}

/**
 * Lembre-se, os parâmetros de tipo são para relacionar os tipos de valores múltiplos . Se um parâmetro de tipo for usado apenas uma vez na assinatura da função, ele não está relacionado a nada.
 * 
 * Regra : Se um parâmetro de tipo aparecer apenas em um local, reconsidere fortemente se você realmente precisa dele
*/
