/**
 * * DEFININDO UM TIPO DE UNION(UNIÃO)
 * 
 *  A primeira maneira de combinar tipos que você pode ver é um tipo de união(union type). Um tipo de união é um tipo formado por dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Nos referimos a cada um desses tipos como membros do sindicato.
 * 
 * Vamos escrever uma função que pode operar em strings ou números:
*/

//o typescript  permite que você crie novos tipos a partir dos existentes usando uma grande variedade de operadores
//primeira maneira de combinar tipos e o union type(tipo união)
//e um tipo formado por dois ou mais outros tipos, representado valores que podem ser qualquer um desses tipos
//add anotações de tipo de paramentro apos cada paramentro para declarar quais tipos de paramentro a function aceita
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

//OK
printId(101);
//OK
printId("202");
//Error
//printId({myID: 22342});