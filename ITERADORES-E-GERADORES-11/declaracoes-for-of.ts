/**
 * * DECLARAÇÕES FOR...OF
 * 
 *  for..of faz um loop em um objeto iterável, invocando a propriedade Symbol.iterator no objeto. Aqui está um loop for..of em uma ARRAY:
*/

let someArray = [1, "string", false];

//itera sobre um objeto iteravel invocando a propriedade Symbol.iterator no objeto, é responsável por retornar a lista de valores para iterar.
for(let entry of someArray) {
    console.log(entry); //1, "string", false
}