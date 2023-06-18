/**
 * * FUNÇÕES ANÔNIMAS
 * 
 *  As funções anônimas são um pouco diferentes das declarações de função. Quando uma função aparece em um local onde o TypeScript pode determinar como ela será chamada, os parâmetros dessa função recebem tipos automaticamente.
 * 
 * Aqui está um exemplo:
*/

// Nenhuma anotação de tipo aqui, mas o TypeScript pode identificar o bug
const names = ["Alice", "Bob", "Eve"];

// Digitação contextual para função
//se o ts pode determinar como a function anonima sera chamada os paramentros desssa function recebem tipos automaticamente
names.forEach(function (s) {
    console.log(s.toUppercase());
});

// A digitação contextual também se aplica a funções de seta(arrow functions)
//o ts consegue determinar o tipo automaticamente do  paramentro da arrow function
names.forEach((s) => {
    console.log(s.toUppercase());
});

/**
 * Mesmo que o parâmetro s não tenha uma anotação de tipo, o TypeScript usou os tipos da forEach função, juntamente com o tipo inferido da array, para determinar o tipo s que terá.
 * 
 * Esse processo é chamado de digitação contextual(contextual typing) porque o contexto em que a função ocorreu informa qual tipo ela deve ter.
 * 
 * Semelhante às regras de inferência, você não precisa aprender explicitamente como isso acontece, mas entender que isso acontece pode ajudá-lo a perceber quando as anotações de tipo não são necessárias. Posteriormente, veremos mais exemplos de como o contexto em que um valor ocorre pode afetar seu tipo.
*/