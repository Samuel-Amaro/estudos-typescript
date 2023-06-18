/**
 * * NEVER(NUNCA)
 * 
 * Algumas funções nunca retornam um valor:
*/

//declaramos uma function que retorna um tipo never
//declara um paramentro do tipo string
function fail(msg: string): never {
    //essa function não retorna um valor
    //ela retorna never, lança uma exceção
    throw new Error(msg);
}

/**
 * O never tipo representa valores que nunca são observados. Em um tipo de retorno, isso significa que a função lança uma exceção ou encerra a execução do programa.
 * 
 * never também aparece quando o TypeScript determina que não há mais nada em uma união.
*/

//declara uma function rgular
//que define um paramentro de tipo union que corresponde a um dos dois tipos, ou string ou number
function fn(x: string | number) {
    //estreitamento de igualdade do codigo
    if(typeof x === "string") {
        //faça alguma coisa
    }else if(typeof x === "number") {
        //faça alguma coisa se não
    }else{
        //não retorna valor, chegamos e um valor que não e observado pela function
        x; //aqui e tipo 'never'!
    }
}