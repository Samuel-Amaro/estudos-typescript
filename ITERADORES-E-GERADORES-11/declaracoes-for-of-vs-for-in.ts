/**
 * * DECLARAÇÕES FOR..OF VS FOR..IN 
 * 
 * Ambas declarações for..of e for..in iteram em listas; os valores iterados são diferentes, porém, for..in retorna uma lista de chaves no objeto que está sendo iterado, enquanto for..of retorna uma lista de valores das propriedades numéricas do objeto que está sendo iterado.
 * 
 * Aqui está um exemplo que demonstra essa distinção:
*/

let list = [4, 5, 6];

//retorna uma lista de keys no objeto que esta sendo iterado
for(let i in list) {
    console.log(i); //"0", "1", "2"
}

//retorna uma lista de valores das propriedades numericas do objeto que esta sendo iterado
for(let i of list) {
    console.log(i); //4, 5, 6
}

/**
 * Outra distinção é que for..in opera em qualquer objeto; ele serve como uma forma de inspecionar propriedades neste objeto. for..of por outro lado, está principalmente interessado em valores de objetos iteráveis. Objetos integrados como propriedade Map e Set implementam a propriedade Symbol.iterator permitindo acesso a valores armazenados.
*/

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

//itera sobre as keys do objeto, opera em qualquer objeto
for(let pet in pets) {
    console.log(pet); //"species"
}

//itera sobre os valores do objeto iteravel
for(let pet of pets) {
    console.log(pet); //"Cat", "Dog", "Hamster"
}