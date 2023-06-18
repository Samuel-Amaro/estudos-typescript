/**
 * * TIPOS DE OBJETO(OBJECT TYPES) 
 * 
 * Em JavaScript, a maneira fundamental de agrupar e transmitir dados é por meio de objetos. No TypeScript, nós os representamos por meio de tipos de objeto .
 * 
 * Como vimos, eles podem ser anônimos:
*/

//declara uma function regular
//que declara um paramentro chamado person do tipo objeto com duas propriedades
//o objeto declarado e anonimo e foi atribuido ao paramentro person

function greet(person: {name: string; age: number}) {
    return "Hello " + person.name;
}

/**
 * ou eles podem ser nomeados usando uma interface
*/

//declaramos um tipo de objeto nomeado Person
interface Person {
    //propriedades
    name: string;
    age: number;
}

//declara uma function que declara paramentro chamado person que e do tipo do objeto Person
function greet2(person: Person) {
    return "Hello " + person.name;
}

/**
 * ou um alias de tipo.
*/

//Um alias de tipo é exatamente isso - um nome para qualquer tipo .
//definimos um nome para um objeto que possua a seguinte estrutura abaixo
type Person2 = {
    name: string;
    age: number;
};

//declara uma function que declara paramentro chamado person que e do tipo do objeto Person2
function greet3(person: Person2) {
    return "Hello " + person.name;
}

/**
 * Nos três exemplos acima, escrevemos funções que recebem objetos que contêm a propriedade name(que deve ser a string) e age(que deve ser a number).
*/