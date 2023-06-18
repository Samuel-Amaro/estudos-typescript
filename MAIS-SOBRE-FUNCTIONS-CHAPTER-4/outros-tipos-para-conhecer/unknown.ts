/**
 * * UNKNOWN(DESCONHECIDO)
 * 
 * O unknown tipo representa qualquer valor. Isso é semelhante ao any tipo, mas é mais seguro porque não é legal fazer nada com um unknown valor:
*/

//declara uma function que define o paramentro a como podenndo ser de qualquer tipo(any)
function f1(a: any) {
    a.b(); //OK
}

//declara uma functio que define o paramentro a como do tipo unknown podendo representa qualquer valor
function f2(a: unknown) {
    a.b();
}

/**
 * Isso é útil ao descrever tipos de função porque você pode descrever funções que aceitam qualquer valor sem ter any valores no corpo da função.
 * 
 * Por outro lado, você pode descrever uma função que retorna um valor de tipo desconhecido:
*/

//declaramos uma function que declara uma paramentro s do tipo string, a function retorna unknow
function safeParse(s: string) : unknown {
    //a function retorna um tipo desconhecido
    return JSON.parse(s);
}

//Precisa ter cuidado com 'obj'!
//não sabemos que tipo ele e
const obj = safeParse(someRandomString);
