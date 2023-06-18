/**
 * * VERIFICAÇÃO DE EXAUSTIVIDADE
 *  
 * O never tipo pode ser atribuído a cada tipo; no entanto, nenhum tipo pode ser atribuído never(exceto a never si mesmo). Isso significa que você pode usar o estreitamento e confiar no never aumento para fazer uma verificação exaustiva em uma instrução switch.
 * 
 * Por exemplo, adicionar um default à nossa getArea função que tenta atribuir a forma never aumentará quando todos os casos possíveis não tiverem sido tratados.
*/

//declaramos uma forma e um tipo de objeto chamado Circle
interface Circle{
    //definimos um tipo literal string chamado circle
    kind: "circle";
    radius: number;
}

//declaramos uma forma e um tipo de objeto chamado Square
interface Square {
    //define um tipo literal strig chamdo square
    kind: "square";
    sideLength: number;
}

//define um tipo chamado Shape que e do tipo um objeto Circle ou Square usando unions para fazer essa combinação de tipos
type Shape3 = Circle | Square;


function getArea(shape: Shape3) {
    //estreitamento de igualdade
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            //o ts usa o nver para representar uma estado que não deveria existir
            //podemos atribuir o never tipo a cada tipo
            //declaramos uma constante do tipo never que recebe o valor do pramentro shape um objeto do tipo Circle ou Square
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

/**
 * Adicionar um novo membro à Shape união causará um erro de TypeScript:
*/

//declara uma forma e um tipo de objeto chamado traingle
interface Triangle{
    kind: "triangle";
    sideLength: number;
}

//add um novo menbro a shape union
type Shape4 = Circle | Square | Triangle;

function getArea(shape: Shape4) {
    //estreitamento de igualdade
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            //o ts usa o nver para representar uma estado que não deveria existir
            //podemos atribuir o never tipo a cada tipo
            //declaramos uma constante do tipo never que recebe o valor do pramentro shape um objeto do tipo Circle ou Square
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}