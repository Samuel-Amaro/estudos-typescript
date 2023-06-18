/***
 * * TIPOS CONDICIONAIS
 * 
 *  No cerne da maioria dos programas úteis, temos que tomar decisões com base em informações. Os programas JavaScript não são diferentes, mas dado o fato de que os valores podem ser facilmente introspectivos, essas decisões também são baseadas nos tipos de entradas. Os tipos condicionais ajudam a descrever a relação entre os tipos de entradas e saídas.
*/

//declara um tipo de objeto nomeado
interface Animal{
    //propriedades e metodos do objeto
    live(): void;
}

//a extends palavra-chave an interface nos permite copiar efetivamente membros de outros tipos nomeados e adicionar quaisquer novos membros que desejarmos
//declaramos um novo tipo de objeto nomeado Dog que e filho de Animal, herda tudo de animal
interface Dog extends Animal{
    //propriedades e metodos pertencentes a dog 
    woof(): void;
}

//declaramos um novo tipo chamado Example1
type Example1 = Dog extends Animal ? number : string;

//declaramos um novo tipo chamado Example2
type Example2 = RegExp extends Animal ? number : string;

/**
 * Os tipos condicionais assumem uma forma que se parece um pouco com expressões condicionais ( condition ? trueExpression : falseExpression) em JavaScript:
*/

//SomeType exteds OtherType ? TrueType : FalseType;

/**
 * Quando o tipo à esquerda de extends for atribuível ao da direita, você obterá o tipo na primeira ramificação (a ramificação “verdadeira”); caso contrário, você obterá o tipo no último ramo (o ramo “falso”).
 * 
 * A partir dos exemplos acima, os tipos condicionais podem não parecer imediatamente úteis - podemos dizer a nós mesmos se é ou não Dog extends Animal e escolher number ou string! Mas o poder dos tipos condicionais vem de usá-los com genéricos.
 * 
 * Por exemplo, vamos pegar a seguinte createLabel função:
*/

//cria um tipo de objeto nomeado
interface IdLabel{
    //propriedades e metodos
    id: number; /*mais campos*/
}

//cria um outro tipo de objeto nomeado
interface NameLabel{
    name: string; /*other campos*/
}

//declaramos uma assinatura de function
function createLabel(id: number): IdLabel;

//declaramos uma assinatura de sobrecarga da function
function createLabel(name: string): NameLabel;

//declaramos uma assinatura de sobrecarga da function
function createLabel(nameOrId: string | number): IdLabel | NameLabel;

//declaramos uma assinatura de implementação da function, essa assinatura não pode ser chamada, e somnete uma assinatura que implementa a function
function createLabel(nameOrId: string | number): IdLabel | NameLabel{
    throw "unimplemented";
}

/**
 * Essas sobrecargas para createLabel descrevem uma única função JavaScript que faz uma escolha com base nos tipos de suas entradas. Observe algumas coisas:
 * 
    * Se uma biblioteca tiver que fazer o mesmo tipo de escolha repetidamente em sua API, isso se tornará complicado.
    * 
    * Temos que criar três sobrecargas: uma para cada caso quando tivermos certeza do tipo (uma para stringe outra para number) e uma para o caso mais geral (pegar um string | number). Para cada novo tipo createLabelque pode manipular, o número de sobrecargas cresce exponencialmente.
    * 
 *  Em vez disso, podemos codificar essa lógica em um tipo condicional:
*/

//declaramos um novo tipo generico que define um paramentro de tipo esse paramentro de tipo e restrito a tipos que sejam atribuiveis a tipos string ou number
//o tipo generico so aceitara tipos fornecidos pelo usuario que sejam atribuives a number ou string, essa e uma forma de restringir os tipos aceitos, assim de acordo com o tipo fornecido retorna um tipo correpondente

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

/**
 * Podemos então usar esse tipo condicional para simplificar nossas sobrecargas em uma única função sem sobrecargas.
*/

//declaramos uma function generica que define um paramentro de tipo T esse paramentro de tipo e restrito a tipos que sejam atribuiveis a tipos string ou number
//a function generica so aceitara tipos fornecidos pelo usuario que sejam atribuives a number ou string, essa e uma forma de restringir os tipos aceitos, para retornar valores correspondetes ao tipos fornecidos
function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

//fornecemos uma string literal como valor, o paramentro de tipo ira inferir(descobrir automaticamente o tipo) e retorna um tipo de acordo
let a = createLabel("typescript");

//mesma coisa
let b = createLabel(2.8);

//tipos condicionais, de acordo com o valor informado no argumento retorna um tipo inferido
let c = createLabel(Math.random() ? "hello" : 42);