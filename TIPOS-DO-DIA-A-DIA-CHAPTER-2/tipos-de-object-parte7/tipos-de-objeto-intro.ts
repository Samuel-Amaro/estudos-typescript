/**
 * * TIPOS DE OBJETO
 * 
 * Além dos primitivos, o tipo mais comum que você encontrará é um tipo de objeto . Isso se refere a qualquer valor JavaScript com propriedades, que são quase todos eles! Para definir um tipo de objeto, simplesmente listamos suas propriedades e seus tipos.
 * 
 * Por exemplo, aqui está uma função que recebe um objeto do tipo ponto:
*/

//paramentro de function
//e do tipo object, listamos suas propriedades e seus tipos
function printCoord(pt: {x: number, y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 3, y: 7});

/**
 * Aqui, anotamos o parâmetro com um tipo com duas propriedades - x e y- que são ambas do tipo number. Você pode usar , ou ; para separar as propriedades, e o último separador é opcional de qualquer maneira.
 * 
 * A parte do tipo de cada propriedade também é opcional. Se você não especificar um tipo, será considerado any.
*/

