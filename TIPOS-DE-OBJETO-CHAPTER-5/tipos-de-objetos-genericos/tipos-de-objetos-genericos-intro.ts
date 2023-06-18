/**
 * * TIPOS DE OBJETOS GENERICOS(Generic Object Types) 
 * 
 * Vamos imaginar um Box tipo que pode conter qualquer valor - strings, numbers, Giraffes, o que for.
 * 
 * 
*/

//declara um tipo de objeto nomeado
interface Box {
    //declara uma propriedade
    contents: any;
}

/**
 * No momento, a contents propriedade é digitada como any, o que funciona, mas pode levar a acidentes no futuro.
 * 
 * Em vez disso, poderíamos usar unknown, mas isso significaria que, nos casos em que já conhecemos o tipo de contents, precisaríamos fazer verificações preventivas ou usar asserções de tipo propensas a erros.
*/

//declara um tipo de objeto nomeado
interface Box2 {
    //declara uma propriedade do tipo unknown representa qualquer valor.
    contents: unknown;
}

//declara um objeto do tipo Box 
let x: Box = {
    //atribui um valor do tipo string na propriedade
    contents: "hello world",
};

//poderíamos verificar 'x.contents'
//estreitando o codigo
if(typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
}

//ou poderíamos usar uma declaração de tipo
//usamos uma declaração de tipo para especificar um tipo mais específico, no caso especificando que o valor de x.contents e uma string
console.log((x.contents as string).toLowerCase());

/**
 * Uma abordagem segura de tipo seria, em vez disso, criar diferentes Box tipos para cada tipo de arquivo contents.
*/

//declara um tipo de objeto nomeado
interface NumberBox{
    //declara propriedade
    contents: number;
}

//declara um tipo de objeto nomeado
interface StringBox{
    //declara propriedade
    contents: string;
}

//declara um tipo de objeto nomeado
interface BooleanBox{
    //declara propriedade
    contents: boolean;
}

/**
 * Mas isso significa que teremos que criar diferentes funções, ou sobrecargas de funções, para operar nesses tipos.
*/

//declara uma assinatura de function com dois paramentros o primeiro box do tipo StringBox, o segundo newContents do tipo string, a function retorna nada
function setContents(box: StringBox, newContents: string): void;

//declaramos uma assinatura de sobrecarga da function mudando o tipo dos paramentros
function setContents(box: NumberBox, newContents: number): void;

//declaramos uma assinatura de sobrecarga da function mudando o tipo dos paramentros
function setContents(box: BooleanBox, newContents: boolean): void;

//declaramos uuma assinatura de implementação, essa assinatura não pode ser chamada, ela somente implementa o corpo da function
function setContents(box: {contents: any}, newContents: any) {
    box.contents = newContents;
}

/**
 * Isso é muito clichê. Além disso, podemos precisar introduzir novos tipos e sobrecargas posteriormente. Isso é frustrante, já que nossos tipos de caixa e sobrecargas são efetivamente os mesmos.
 * 
 * Em vez disso, podemos criar um tipo genérico Box que declare um parâmetro de tipo.
*/

//declaramos um tipo de objeto nomeado Box3
//que define um paramentro de tipo
//informado no paramentro de tipo e um objeto generico
//o paramentro de tipo Type correponde a um tipo
interface Box3<Type>{
    //declara uma propriedade generica, que pode ser de qualquer tipo, de acordo com o paramentro de tipo Type
    contents: Type;
}

/**
 * Você pode ler isso como “A Box de Type é algo cujo contents tipo tem Type”. Mais tarde, quando nos referirmos a Box, temos que fornecer um argumento de tipo no lugar de Type.
 * 
*/

//declarando um objeto do tipo Box3, informando um paramentro de tipo como string 
let box: Box3<string>;

/**
 * Pense Box em um modelo para um tipo real, onde Type há um espaço reservado que será substituído por algum outro tipo. Quando o TypeScript vê Box<string>, ele substituirá todas as instâncias de Type in Box<Type> por string, e acabará funcionando com algo como { contents: string }. Em outras palavras, Box<string>e nosso StringBox trabalho anterior de forma idêntica.
*/

//declaramos um objeto do tipo Box3, informando um argumento de tipo do tipo string
let boxA: Box3<string> = {contents: "hello"};
boxA.contents;

//declaramos um objeto do tipo StringBox
let boxB: StringBox = { contents: "world"};
boxB.contents;

/**
 * Box é reutilizável porque Type pode ser substituído por qualquer coisa. Isso significa que, quando precisamos de uma caixa para um novo tipo, não precisamos declarar um novo Box tipo (embora certamente poderíamos, se quiséssemos).
*/

//declaramos um novo objeto nomeado 
interface Apple{
    //...
}

// O mesmo que '{ conteúdo: Apple }'.
//declaramos um novo tipo
type AppleBox = Box3<Apple>;

/**
 * Isso também significa que podemos evitar sobrecargas totalmente usando funções genéricas.
*/

//declaramos uma function regular que define um paramentro de tipo Type que define paramentros do Tipo Box3 que tambem aceita paramentros de tipo
function setContents3<Type>(box: Box3<Type>, newContents: Type) {
    box.contents = newContents;
}

/**
 * Vale a pena notar que os aliases de tipo também podem ser genéricos. Poderíamos ter definido nossa nova Box<Type> interface, que seria:
 * 
 * usando um alias de tipo:
*/

//definimos um novo tipo que aceita um parametro de tipo Type
type Box4<Type> = {
    //propriedades
    contents: Type;
};

/**
 * Como os aliases de tipo, ao contrário das interfaces, podem descrever mais do que apenas tipos de objeto, também podemos usá-los para escrever outros tipos de tipos auxiliares genéricos.
*/

//declaramos um novo tipo, que aceita um paramentro de tipo Generitco Type 
type OrNull<Type> = Type | null;

//mesma coisa
type OneOrMany<Type> = Type | Type[];

//aqui declaramos um novo tipo que aceita um paramentro de tipo generico Type
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

//mesma coisa
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
