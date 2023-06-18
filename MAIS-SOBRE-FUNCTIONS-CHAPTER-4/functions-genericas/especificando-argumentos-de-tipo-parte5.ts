/**
 * * ESPECIFICANDO ARGUMENTOS DE TIPO
 * 
 * O TypeScript geralmente pode inferir os argumentos de tipo pretendidos em uma chamada genérica, mas nem sempre. Por exemplo, digamos que você escreveu uma função para combinar dois arrays:
*/

//declara uma function regular
//que possui um paramentro de tipo generico na assinatura da função
//usando genericos para descrever uma correpondecia entre dois valores, um generico pode corresponder a um tipo mais especifico
//paramentros do tipo um array de elementos que pode ser do tipo Type
//a function regular retorna um array de Type
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

/**
 * Normalmente seria um erro chamar esta função com arrays incompatíveis:
*/

//erro arrays com tipos incompativeis
//forneço arrays com tipos diferentes, incompativeis
const arr = combine([1, 2, 3], ["hello"]);

/**
 * Se você pretende fazer isso, no entanto, você pode especificar manualmente Type: 
*/

//especificando os tipos que são para ser combinados entre os arrays, inferindo manulamente os tipos para a function
//especificamos manulamente cada tipo de array que serão fornecedos por argumento
const arr2 = combine<string | number>([1, 2, 3], ["hello"]);
