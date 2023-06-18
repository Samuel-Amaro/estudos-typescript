/**
 * * TIPOS DE ACESSO INDEXADO
 * 
 * Podemos usar um tipo de acesso indexado para procurar uma propriedade específica em outro tipo:
*/

//definimos um tipo de objeto Person
type Person = {age: number; name: string; alive: boolean};

//usando um tipo de acesso indexado para procurar uma propriedade especifica age no proprio Person tipo, o valor que contem nesta propriedade iremos definir um novo tipo
type Age = Person["age"];

/**
 * O próprio tipo de indexação é um tipo, então podemos usar unions, keyof, ou outros tipos inteiramente:
*/

//o proprio tipo de indexação e um tipo,
//então podemos usar unions, keyof ou outros tipos inteiramente
//usando unions para combinar tipos de indexação, podemos acessar uma ou outra propriedade especifica, mas as propriedades retornam tipos de valores diferenters
//assim definimos um novo tipo, aqui especicamos dois tipos de string literal, propriedades do objeto person que corerspondem ao tipo string literal sera acessada
type I1 = Person["age" | "name"];

//usando o operador de tipo keyof,
//O keyof operador pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves.
//retorna um dos valors na chave, e definimos um novo tipo
//acessmos uma propriedade que corresponde ao tipo retornado por keyof
type I2 = Person[keyof Person];

//definimos um tipo union literal de strings, correponde a um dos dois literais 
//porpriedades no objeto que corespondam a algun desses literais de string serão acessados
type AliveOrName = "alive" | "name";

//definimos um novo tipo baseado no valor retornado no tipo da indexação que acessamos na propriedade
type I3 = Person[AliveOrName];

/**
 * Você ainda verá um erro se tentar indexar uma propriedade que não existe:
*/

//ocorre uum erro se tentarmos indexar uma propriedade que não existe
type I1 = Person["alve"];

/**
 * Outro exemplo de indexação com um tipo arbitrário é usar number para obter o tipo dos elementos de uma array. Podemos combinar isso typeof para capturar convenientemente o tipo de elemento de um array literal:
*/

//declaramos um array literal de objetos
const MyArray = [
    {
        name: "Alice", age: 15
    },
    {
        name: "Bob", age: 23
    },
    {
        name: "Eve", age: 38
    }
];

//definimos um novo tipo
//usando o tipo de indexação
//usamos number para obter o tipo dos elementos de um array
//acessaremos o elemento do array que corresponder a uma proriuedade do tipo number, a primeria que coresponder
type Person2 = typeof MyArray[number];

//define um novo tipo
//mesma coisa
//usndo o tipo de indexação, usamos um tipo number para acessar o elemento que e indetificado por um propriedade do tipo number e uma string para acessar a propriedade do elemento do array
type Age2 = typeof MyArray[number]["age"];

//mesma coisa
//define um novo tipo
//acessmos uma proriedade no tipo person ,usndo o tipo de indexação fornecendo um tipo de string literal, se tiver uma proriedade que coresponde a isso acessamos o elemento
type Age3 = Person["age"];

/**
 * Você só pode usar tipos ao indexar, o que significa que não pode usar a const para fazer uma referência de variável:
*/

const key = "age";

//definimos um novo tipo
//so podemos usar tipos ao indexar, não podemos usar variavies ou constantes para fazer referencia a algum tipo, variaveis ous constantes são valores, e não tipos, na indexação de tipos so podemos usar tipos
type Age4 = Person[key];

/**
 * No entanto, você pode usar um alias de tipo para um estilo semelhante de refatoração:
*/

//definimos um tipo de string literal chamado key
type key = "age";
//definimos um novo tipo de prorpiedade chamada age5
type Age5 = Person[key];