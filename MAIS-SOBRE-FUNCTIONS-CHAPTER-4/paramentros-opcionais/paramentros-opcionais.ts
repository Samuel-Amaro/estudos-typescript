/**
 * * PARÂMETROS OPCIONAIS
 * 
 * As funções em JavaScript geralmente recebem um número variável de argumentos. Por exemplo, o toFixed método de number leva uma contagem de dígitos opcional:
*/

//declara uma function regular 
//que declara uma paramentro n do tipo number
//add anotações do tipo paramentro
function f(n: number) {
    console.log(n.toFixed()); //0 argumentos
    console.log(n.toFixed(3)); //1 argumento
}

/**
 * Podemos modelar isso no TypeScript marcando o parâmetro como opcional com ?:
*/

//declaramos uma function regular
//que define o paramentro x como opcional 
//add anotação de tipo de paramentro
function f2(x?: number) {
    //....
}

f2(); //OK, e opcional fornecer ou não argumentos
f2(10); //OK

/**
 * Embora o parâmetro seja especificado como type number, o x parâmetro terá realmente o tipo number | undefined porque parâmetros não especificados em JavaScript obtêm o valor undefined.
 * 
 * Você também pode fornecer um padrão de parâmetro :
*/

//declaramos uuma function regular
//add uma paramentro que possui um valor padrão de 10
function f3(x = 10) {
    //...
}

/**
 * Agora no corpo de f, x terá type number pois qualquer undefined argumento será substituído por 10. Observe que quando um parâmetro é opcional, os chamadores sempre podem passar undefined, pois isso simplesmente simula um argumento “ausente”:
*/

//declara uma function regular que não retorna nada
//que declara um paramentro opcional do tipo number
//add anotações de tipo de paramentro
declare function f4(x?: number) : void;

//cut
//All OK

f4(); //posso ou não fornecer argumento
f4(10); //fornecemos valor 10 como argumento
f4(undefined); //fornecemos valor undefined como argumento para simular um argumento ausente

