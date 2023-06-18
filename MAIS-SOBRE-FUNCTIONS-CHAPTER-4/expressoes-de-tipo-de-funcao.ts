/**
 * * EXPRESSÕES DE TIPO DE FUNÇÃO(Function Type Expressions) 
 * 
 * A maneira mais simples de descrever uma função é com uma expressão de tipo de função. Esses tipos são sintaticamente semelhantes às funções de seta(ARROW FUNCTIONS):
*/

//declara uma function regular que possui um paramentro fn
//esse paramentro e uma expressão de tipo de function, uma maneira simples de descrever uma function 
//A sintaxe (a: string) => void significa “uma função com um parâmetro, chamado a, do tipo string, que não tem valor de retorno”
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

//chama greeter function passando a function printCons... como argumento
greeter(printToConsole);

/**
 * A sintaxe (a: string) => void significa “uma função com um parâmetro, chamado a, do tipo string, que não tem valor de retorno”. Assim como nas declarações de função, se um tipo de parâmetro não for especificado, ele será implicitamente any(qualquer).
 * 
 * Observe que o nome do parâmetro é obrigatório . O tipo de função (string) => void significa “uma função com um parâmetro chamado string do tipo any“!
 * 
 * Claro, podemos usar um alias de tipo para nomear um tipo de função:
*/

//definimos o nome GreetFunction como um tipo
//assim podemos referenciar o tipo por meio desse nome, usando aliases de tipo
type GreetFunction = (a: string) => void;

//assim definimos que a greeter2 function possui um paramentro fn do tipo GreetFunction
function greeter2(fn: GreetFunction) {
    //...
}