/**
 * * ANALISE DE FLUXO DE CONTROLE
 * 
 * Até este ponto, passamos por alguns exemplos básicos de como o TypeScript se restringe a ramificações específicas. Mas há um pouco mais acontecendo do que apenas subir de cada variável e procurar por guardas de tipo em ifs, whiles, condicionais, etc. Por exemplo 
*/

//declaramos uma function regular com dois paramentros
//aqui add anotações de tipo de paramentros para especificar o tipo de valor que cada paramentro aceita
//e add anotações de tipo de retorno que aparecem apos a lista de paramentros
//padding param possui um tipo complexo union que aceita ou string ou number
//input aceita somente valores string
function padLeft4(padding: number | string, input: string): string {
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
 * padLeft retorna de dentro de seu primeiro if bloco. O TypeScript foi capaz de analisar esse código e ver que o restante do corpo ( return padding + input;) é inacessível no caso em que padding é um number. Como resultado, foi possível remover number o tipo de padding(restringindo de string | number para string) para o restante da função.
 * 
 * Essa análise de código com base na acessibilidade é chamada de análise de fluxo de controle( control flow analysis,) e o TypeScript usa essa análise de fluxo para restringir os tipos à medida que encontra proteções e atribuições de tipo. Quando uma variável é analisada, o fluxo de controle pode se dividir e se fundir repetidamente, e pode-se observar que essa variável tem um tipo diferente em cada ponto.
*/

//declara uma function regular
function example() {
    //declara uma variavel 
    //add uma anotação de tipo para especificar o tipo da variavel, a variavel e do tipo union correponde a um dos três tipos especificados
    let x: string | number | boolean;

    x = Math.random() < 0.5;

    console.log(x);

    if(Math.random() < 0.5) {
        x = "hello";
        console.log(x);



    }else{
        x = 100;
        console.log(x);



    }
    return x;

}