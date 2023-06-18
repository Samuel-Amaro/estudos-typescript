/**
 * * INTERFACES
 * 
 * Uma declaração de interface é outra maneira de nomear um tipo de objeto:
*/

//outra maneira de nomear um tipo de objeto e usando interface
interface Point{
    x: number;
    y: number;
}

//declara uma function e um paramentro
//add uma anotação do tipo paramentro para especificar o tipo do paramentro
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 100});

/**
 * Assim como quando usamos um alias de tipo acima, o exemplo funciona como se tivéssemos usado um tipo de objeto anônimo. O TypeScript se preocupa apenas com a estrutura do valor para o qual passamos printCoord- ele se preocupa apenas com o fato de ter as propriedades esperadas. Estar preocupado apenas com a estrutura e os recursos dos tipos é o motivo pelo qual chamamos o TypeScript de sistema de tipos estruturalmente tipados .
*/