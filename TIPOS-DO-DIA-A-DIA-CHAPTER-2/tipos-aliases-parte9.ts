/**
 * * TYPE ALIASES(TIPOS ALIASES)
 * 
 *  Temos usado tipos de objeto e tipos de união escrevendo-os diretamente em anotações de tipo. Isso é conveniente, mas é comum querer usar o mesmo tipo mais de uma vez e se referir a ele por um único nome.
 * 
 * Um alias de tipo é exatamente isso - um nome para qualquer tipo . A sintaxe para um alias de tipo é:
*/

//add uma aliases de tipo
//um nome para qualquer tipo
//a sintaxe para um alias de tipo e:
type Point = {
    x: number;
    y: number;
};

// Exatamente igual ao exemplo anterior
//declaramos uma function regular 
//que declara uma paramentro chamado pt
//add anotações de tipo de parametro para que possamos especificar os tipos de valores dos paramentros
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 100});

/**
 * Na verdade, você pode usar um alias de tipo para dar um nome a qualquer tipo, não apenas a um tipo de objeto. Por exemplo, um alias de tipo pode nomear um tipo de união:
*/

//add uma alias de tipo para nomear um tipo union
type ID = number | string;

/**
 * Observe que aliases são apenas aliases - você não pode usar aliases de tipo para criar “versões” diferentes/distintas do mesmo tipo. Quando você usa o alias, é exatamente como se tivesse escrito o tipo de alias. Em outras palavras, esse código pode parecer ilegal, mas está correto de acordo com o TypeScript porque ambos os tipos são aliases para o mesmo tipo:
*/

type UserInputSanitizedString = string;

function sanitizedInput(str: string): UserInputSanitizedString {
    return sanitize(str);
}

//Cria uma sanitized input
let userInput = sanitizedInput(getInput());

// Ainda pode ser reatribuído com uma string
userInput = "new input";