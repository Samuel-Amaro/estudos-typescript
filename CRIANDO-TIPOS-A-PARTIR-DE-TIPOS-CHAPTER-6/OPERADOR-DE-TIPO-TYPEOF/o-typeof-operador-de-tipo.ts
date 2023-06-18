/**
 * * O TYPEOF(TIPO DE) OPERADOR DE TIPO
 * 
 * O JavaScript já possui um typeof operador que você pode usar em um contexto de expressão:
*/

//imprime "string"
console.log(typeof "Hello world");

/**
 * O TypeScript adiciona um typeof operador que você pode usar em um contexto de tipo para se referir ao tipo de uma variável ou propriedade:
*/

//declara uma variavel e a inicializa
let s = "hello";
//usando o operador de tipo typeof, para descobir o tipo do valor que esta armazenado na variavel s, e podemos nos referir a esse tipo depois
//declaramos uma nova variavel do tipo da variavel s
let n: typeof s;

/**
 * Isso não é muito útil para tipos básicos, mas combinado com outros operadores de tipo, você pode usar typeof para expressar convenientemente muitos padrões. Por exemplo, vamos começar examinando o tipo predefinido ReturnType<T>. Ele pega um tipo de função e produz seu tipo de retorno:
*/

//declaramos um novo tipo chamado Predicate
//que e uma arrow function que aceita um paramaentro de qualquqer tipo e retorna um boolean
type Predicate = (x: unknown) => boolean;

//declarando um novo tipo, a partir do tipo predefinido ReturnType<T> que pega um tipo de function e produz seu tipo de retorno, vamos criar um novo tipo baseado nesse retorno
//fornecemos o tipo Predicate como um tipo de function
type K = ReturnType<Predicate>;

/**
 * Se tentarmos usar ReturnType em um nome de função, veremos um erro instrutivo:
*/

//declaramos uma function regular que retorna um objeto literal anonimo
function f() {
    return {x: 10, y: 3};
}

//usando o tipo Predefinido ReturnType<> que obtem o tipo dee retorno de um function, iremos passar somente o nome de uma function a f
//para produzir um novo tipo baseado no retorno de f
//obtemos um erro pois, estamos no refererindo ao valor de f ao forneceir ao tipo predefinido ReturnType, precisamos fornecer o tipo, referimos ao valor da function por meio do seu nome
type P = ReturnType<f>;

/**
 * Lembre-se de que valores e tipos não são a mesma coisa. Para se referir ao tipo que o valor f possui, usamos typeof:
*/

//usando o typeof operador para retornar o tipo da function f, para o tipo predefinido ReturnType, produzir o tipo de retorno do tipo da function fornecida, para criamos um novo tipo baseado no retorno
type P1 = ReturnType<typeof f>;

