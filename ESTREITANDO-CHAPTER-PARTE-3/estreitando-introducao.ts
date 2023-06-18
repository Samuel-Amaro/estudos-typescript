/**
 * * ESTREITANDO(narrowing)
 * 
 *  Imagine que temos uma função chamada padLeft.
*/

//declaramos uma function regular com dois paramentros
//aqui add anotações de tipo de paramentros para especificar o tipo de valor que cada paramentro aceita
//e add anotações de tipo de retorno que aparecem apos a lista de paramentros
//padding param possui um tipo complexo union que aceita ou string ou number
//input aceita somente valores string
function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
}

/**
 * Se padding for a number, ele o tratará como o número de espaços que desejamos preceder input. Se padding for um string, deve apenas preceder padding a input. Vamos tentar implementar a lógica para quando padLeft é passado um number for padding.
*/

function padLeft2(padding: number | string, input: string): string {
    return " ".repeat(padding) + input;
}

/**
 * Uh-oh, estamos recebendo um erro em padding. O TypeScript está nos avisando que adicionar a number | string a a number pode não nos dar o que queremos, e está certo. Em outras palavras, não verificamos explicitamente se padding é um number primeiro, nem estamos lidando com o caso em que é um string, então vamos fazer exatamente isso.
*/

function padLeft3(padding: number | string, input: string): string {
   //verificando se o paramentro padding e um number
   //se for um numero o trataremos como o numero de espaços que desejamos preceder o input
    if(typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    //padding e do tipo string
    //o trataremos como padding deve preceder input
    return padding + input;
}

/**
 * Se isso parece um código JavaScript desinteressante, esse é o ponto. Além das anotações que colocamos, esse código TypeScript se parece com JavaScript. A ideia é que o sistema de tipos do TypeScript visa tornar o mais fácil possível escrever código JavaScript típico sem se curvar para obter segurança de tipo.
 * 
 * Embora possa não parecer muito, na verdade há muita coisa acontecendo por baixo das cobertas aqui. Assim como o TypeScript analisa valores de tempo de execução usando tipos estáticos, ele sobrepõe a análise de tipo nas construções de fluxo de controle de tempo de execução do JavaScript, como if/else, ternários condicionais, loops, verificações de veracidade etc., que podem afetar esses tipos.
 * 
 * Em nossa if verificação, o TypeScript vê typeof padding === "number" e entende isso como uma forma especial de código chamada type guard. O TypeScript segue possíveis caminhos de execução que nossos programas podem seguir para analisar o tipo mais específico possível de um valor em uma determinada posição. Ele analisa essas verificações especiais (chamadas de guardas de tipo(type guard)) e atribuições, e o processo de refinar tipos para tipos mais específicos do que os declarados é chamado de restrição . Em muitos editores, podemos observar esses tipos conforme eles mudam, e faremos isso até mesmo em nossos exemplos. 
 * 
 * Existem algumas construções diferentes que o TypeScript entende para estreitar.
*/