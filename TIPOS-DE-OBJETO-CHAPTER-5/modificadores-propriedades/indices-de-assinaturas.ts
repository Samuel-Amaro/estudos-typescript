/**
 * * INDICES DE ASSINATURAS(INDEX DE ASSGNATURES)
 * 
 *  Às vezes, você não conhece todos os nomes das propriedades de um tipo com antecedência, mas conhece a forma dos valores.
 * 
 * Nesses casos, você pode usar uma assinatura de índice para descrever os tipos de valores possíveis, por exemplo:
*/

//declara um tipo de objeto nomeado StringArray
interface StringArray{
    //declara propriedades
    //quando não conhecimos os nomes das propriedades com antecedencia
    //usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
    //a proprieade e do tipo number e o valor da propriedade e string
    //esta assinatura de index afirma que quando StringArray e indexado com a number, ele retornara a string
    [index: number]: string;
}

//declara uma constante que do tipo StringArrary
const myArray: StringArray = getStringArray();
//quando indexamos a myArrary com um nuumber como propriedade ele retornara uma string
const secondItem = myArray[1];

/**
 *  Acima, temos uma StringArray interface que possui uma assinatura de índice. Essa assinatura de índice afirma que quando a StringArray é indexado com a number, ele retornará a string.
 * 
 * Apenas alguns tipos são permitidos para propriedades de assinatura de índice: string, number, symbol, padrões de string de modelo e tipos de união que consistem apenas neles.
 * 
 * É possível suportar ambos os tipos de indexadores...
 * 
 * É possível oferecer suporte a ambos os tipos de indexadores, mas o tipo retornado de um indexador numérico deve ser um subtipo do tipo retornado do indexador de string. Isso ocorre porque, ao indexar com um number, o JavaScript o converterá em um string antes de indexar em um objeto. Isso significa que indexar com 100(a number) é a mesma coisa que indexar com "100"(a string), então os dois precisam ser consistentes.
*/

//declara um tipo de objeto nomeado Animal
interface Animal{
    //propriedade
    name: string;
}

//declara um tipo de objeto nomeado Dog que e um filho herda tudo de Animal
interface Dog extends Animal{
    //propriedade especializada de Dog
    breend: string;
}

//Erro: a indexação com uma string numérica pode resultar em um tipo de Animal completamente separado!
//declaramos um novo tipo de objeto nomeado NotOkay
interface NotOkay{
    //propriedades
    //declara propriedades
    //quando não conhecimos os nomes das propriedades com antecedencia
    //usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
    //a proprieade e do tipo number e o valor da propriedade e string
    //esta assinatura de index afirma que quando StringArray e indexado com a number, ele retornara a string
    //erro porque o tipo do indice tem que ser string
    [x: number]: Animal;
    [x: string]: Dog;
}

/**
 * Embora as assinaturas de índice de cadeia de caracteres sejam uma maneira poderosa de descrever o padrão de “dicionário”, elas também impõem que todas as propriedades correspondam ao seu tipo de retorno. Isso ocorre porque um índice de string declara que obj.property também está disponível como obj["property"]. No exemplo a seguir, name o tipo de 's não corresponde ao tipo do índice de string e o verificador de tipos apresenta um erro:
*/

//declara um tipo de objeto nomeado
interface NumberDictionary{
    //declara propriedade
    //quando não conhecimos os nomes das propriedades com antecedencia
    //usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
    //a proprieade e do tipo string e o valor de retorna da propriedade e number 
    //esta assinatura de index afirma que quando StringArray e indexado com a atring, ele retornara a number
    [index: string]: number;
    length: number; //OK
    //erro porque o tipo do indice não correponde ao tipo de retorno da propriedade
    name: string;
}

/**
 * No entanto, propriedades de tipos diferentes são aceitáveis ​​se a assinatura do índice for uma união dos tipos de propriedade:
*/

//declara um tipo de objeto nomeado
interface NumberOrStringDictionary{
    //usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
    //o indce da proprieade e do tipo string e o valor de retorna da propriedade e do tipo union pode ser um number ou uma string 
    [index: string]: number | string;
    //indice string retorna number valor da propriedade
    length: number; //ok, length e um numero
    name: string; //ok, name e uma string
}

/**
 * Por fim, você pode fazer assinaturas readonly de índice para evitar atribuição a seus índices:
*/

//declara um tipo de objeto nomeado
interface ReadonlyStringArray{
    //usamos uma assinatura de index para descrever os tipos de valores possiveis que uma propriedade pode ter
    //o indce da proprieade e do tipo number e o valor de retorna da propriedade e do tipo string, e uma propriedade marcada como somente leitura
    readonly [index: number]: string;
}

//declara uma nova variavel do tipo REeadonlyStringArrary
let myArray2: ReadonlyStringArray = getReadonlyStringArray();

//quando indexamos a myArrary com um nuumber como propriedade para atribuição de um novo valor
//como a propriedade e  marcadda somente como leitura não podemos atribuir novos valores para a mesma, durante a verificação de tipos estaticos
myArray2[2] = "Mallory";

/**
 * Você não pode definir myArray[2] porque a assinatura do índice é readonly.
*/