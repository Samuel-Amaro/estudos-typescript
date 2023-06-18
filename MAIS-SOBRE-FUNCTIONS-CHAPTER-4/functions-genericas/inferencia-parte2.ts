/**
 * * INFERENCIA
 * 
 * Observe que não precisamos especificar Type neste exemplo. O tipo foi inferido - escolhido automaticamente - pelo TypeScript.
 * 
 * Também podemos usar vários parâmetros de tipo. Por exemplo, uma versão autônoma de map ficaria assim:
*/

//declara uma function regular chamada map
//que possui um paramentro de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores, um generico pode corresponder a um tipo mais especifico
//primeiro paramentro arr e do tipo um array de elementos que pode ser do tipo Input generico
//func e um paramentro que recebe uma function uma expressão de tipo de função que possui um argumento arg do tipo Input e retorna um Output generico
//a function regular map retorna um array de Output generico
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

//paramentro 'n' e do tipo 'string'
//'parsed' e do tipo 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/**
 * Observe que, neste exemplo, o TypeScript pode inferir o tipo do Input parâmetro de tipo (da string array fornecida), bem como o Output parâmetro de tipo com base no valor de retorno da expressão de função (number).
*/