/**
 * * PROPRIEDADES READONLY(SOMENTE LEITURA)
 * 
 *  As propriedades também podem ser marcadas como readonly para TypeScript. Embora não altere nenhum comportamento em tempo de execução, uma propriedade marcada como readonly não pode ser gravada durante a verificação de tipo.
 * 
*/

//declaramos um tipo de objeto nomeado SomeType
interface SomeType{
    //propriedades
    //podemos especificar algumas coisas em propriedades de objetos, quando estão sendo declarados, o tipo, se a propriedade é opcional e se a propriedade pode ser gravada.
    //a propriedade marcada como readonly não pode ser gravada durante a verificação de tipo
    readonly prop: string;
}

//declara uma function regular
//que declara um paramentro chamado obj que e do tipo SomeType
function doSomething(obj: SomeType) {
    //Podemos ler de 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // Mas não podemos reatribuí-lo.
    //não podemos gravar um novo valor na propriedade porque ela e somente leitura, 
    //não pode gravar um novo valor durante a verificação de tipo
    obj.prop = "hello";
}

/**
 * O uso do readonly modificador não implica necessariamente que um valor seja totalmente imutável - ou seja, que seu conteúdo interno não possa ser alterado. Significa apenas que a propriedade em si não pode ser reescrita.
*/

//declaramos um tipo de objeto nomeado Home
interface Home {
    //propriedade marcada como somente leitura
    readonly resident: {
        name: string;
        age: number;
    };
}

//declara uma function regular que define um paramentro home do tipo Home
function visitForBirthday(home: Home) {
    // Podemos ler e atualizar as propriedades de 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    //não podemos gravar novoso valores na propriedade resident, mas nas suas propriedades internas podemos ler e gravar novos valores
    home.resident.age++;
}

//declara uma function chamada evict que declara um paramentro chamado home do tipo Home
function evict(home: Home) {
    // Mas não podemos escrever na própria propriedade 'residente' em uma 'Casa'.
    //não podemos gravar novos valores na propriedade resident, porque ela e somente leitura
    home.resident = {
        name: "Victor the Evictor",
        age: 42,
    };
}

/**
 * É importante gerir as expectativas daquilo que readonly implica. É útil sinalizar a intenção durante o tempo de desenvolvimento do TypeScript sobre como um objeto deve ser usado. O TypeScript não considera se as propriedades em dois tipos são readonly ao verificar se esses tipos são compatíveis, portanto, as readonly propriedades também podem ser alteradas por meio de alias.
*/

//declara um tipo de objeto nomeado Person
interface Person {
    name: string;
    age: number;
}

//declara outro tipo de objeto chamado ReadonlyPerson
interface ReadonlyPerson {
    //declara propriedade marcada somente como leitura
    readonly name: string;
    readonly age: number;
}

//declara um novo objeto do tipo Person
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

//trabalhos
//declara um novo objeto do tipo ReadonlyPerson
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); //prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); //prints '43'

/**
 * Usando modificadores de mapeamento, você pode remover readonly atributos.
*/
