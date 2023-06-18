/**
 * * ASSINATURAS DE SOBRECARGA E A ASSINATURA DE IMPLEMENTAÇÃO
 * 
 *  Esta é uma fonte comum de confusão. Muitas vezes, as pessoas escrevem códigos como este e não entendem por que há um erro:
*/

//declara uma assinatura de function que não retorna nada
//define o parmaentro x
//add anotações de tipo de paramentro
function fn(x: string): void;

//aqui escrevemos uma assinatura de implementação de função com uma assinatura incompativel
//aqui essa e uma assinatura de implementação, mas essa assinatura não pode ser chamada diretamente
function fn() {
    //...
}

// Espera-se que seja capaz de chamar com zero argumentos
//chama function sem fornecer argumentos, pensando que esta compativel com a assinatura de implementação, mas ela não poder ser chamada
//A assinatura da implementação não é visível do lado de fora. Ao escrever uma função sobrecarregada, você sempre deve ter duas ou mais assinaturas acima da implementação da função.
fn();

/**
 * Novamente, a assinatura usada para escrever o corpo da função não pode ser “vista” de fora.
 * 
 * A assinatura da implementação não é visível do lado de fora. Ao escrever uma função sobrecarregada, você sempre deve ter duas ou mais assinaturas acima da implementação da função.
 * 
 * A assinatura de implementação também deve ser compatível com as assinaturas de sobrecarga. Por exemplo, essas funções têm erros porque a assinatura de implementação não corresponde às sobrecargas de maneira correta:
*/

//declara uma assinatura de função que retorna nada
//define o paramentro x do tipo boolean
function fn(x: boolean): void;

//O tipo de argumento não está correto
//declaramos uma assinatura de sobrecarga de function
//declarando somente um paramentro e mudando seu tipo
function fn(x: string): void;

//assinatura de implementação, imcopativel com as assinaturas de sobrecarga acima
function fn(x: boolean) {

}

//declaramos uma assinatura de sobrecarga de function
//mudando o tipo do paramentro e retorno
function fn(x: string): string;

//O tipo de argumento não está correto
//deeclara outra assinatura de sobrecarga de function
//mudando tipo paramentro e reotrno
function fn(x: number) : boolean;

//declara assinatura de implementação, compativel com assinaturas
function fn(x: string | number) {
    return "oops";
}

