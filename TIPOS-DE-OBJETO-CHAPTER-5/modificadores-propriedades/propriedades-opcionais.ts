/**
 * * PROPRIEDADES OPCIONAIS
 * 
 *  Na maior parte do tempo, nos encontraremos lidando com objetos que podem ter um conjunto de propriedades. Nesses casos, podemos marcar essas propriedades como opcionais adicionando um ponto de interrogação ( ?) ao final de seus nomes.
*/

//declaramos um tipo de objeto nomeado PaintOptions
interface PaintOptions{
    //declara propriedades
    //podemos especificar algumas coisas em propriedades de objetos, quando estão sendo declarados, o tipo, se a propriedade é opcional e se a propriedade pode ser gravada.
    shape: Shape;
    //declaramos o tipo da propriedade e especificamos que e uma propriedade opcional, adicionando um ponto de interrogação (?) ao final de seus nomes
    xPos?: number;
    yPos?: number;
}

//declaramos uma function regular
//que declara um paramentro opts do tipo PaintOptions
function paintShape(opts: PaintOptions) {
    //...
}

const shape = getShape();
//chamamos a function fornecendo um objeto, com somente um unica propriedade
paintShape({shape});
//chamamos a function fornecendo um objeto com duas propriedades
paintShape({shape, xPos: 100});
//mesma coisa
paintShape({shape, yPos: 100});
//chamamos a function fornecendo um objeto com três propriedades
paintShape({shape, xPos: 100, yPos: 100});

/**
 * Neste exemplo, ambos xPos e yPos são considerados opcionais. Podemos optar por fornecer qualquer um deles, portanto, todas as chamadas acima paintShape são válidas. Tudo o que a opcionalidade realmente diz é que, se a propriedade estiver definida, é melhor que ela tenha um tipo específico.
 * 
 * Também podemos ler essas propriedades - mas quando o fizermos em strictNullChecks, o TypeScript nos dirá que elas são potencialmente undefined.
*/

//lendo propriedades opcionais
//declara function que tem um paramentro do tipo PaintOptions
function paintShape2(opts: PaintOptions) {
    let xPos = opts.xPos;
    let yPos = opts.yPos;
    //...
}

/**
 * Em JavaScript, mesmo que a propriedade nunca tenha sido definida, ainda podemos acessá-la - ela apenas nos dará o valor undefined. Podemos apenas lidar undefined e specialmente.
*/

//declara function que tem um paramentro do tipo PaintOptions
function paintShape3(opts: PaintOptions) {
    //mesmo propriedades opcionais no objeto opts podemos acessala em javascript, aplicando um estreitamento
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    //...
}

/**
 * Observe que esse padrão de definição de padrões para valores não especificados é tão comum que o JavaScript possui sintaxe para suportá-lo.
*/

//definimos uma function regular
//que aceita como paramentro o padrão de desestruturação de objeto em propriedades individuais no corpo da function 
//desestruturamos o tipo PaintOptions em variaiveis individuais inicializadas com valores padroes
function paintShape4({shape, xPos = 0, yPos = 0} : PaintOptions) {
    console.log("x coordinate at", xPos);
    console.log("y coordinate at", yPos);
    //...
}

/**
 * Aqui usamos um padrão de desestruturação para paintShape o parâmetro de e fornecemos valores padrão para xPos e yPos. Agora xPos e yPos estão definitivamente presentes no corpo de paintShape, mas são opcionais para qualquer chamador de paintShape.
 * 
 * Observe que atualmente não há como colocar anotações de tipo dentro dos padrões de desestruturação. Isso ocorre porque a seguinte sintaxe já significa algo diferente em JavaScript.
*/

//declara uma function regular
//que no seu paramentro aceita um objeto com propriedades, cada propriedade especifica o nome, tipo e um valor de inicialização
function draw({shape: Shape, xPos: number = 100 /*...*/}) {
    render(shape);
    render(xPos);
}

/**
 * Em um padrão de desestruturação de objetos, shape: Shape significa “pegar a propriedade shape e redefini-la localmente como uma variável chamada Shape. Da mesma forma xPos: number, cria uma variável chamada number cujo valor é baseado no parâmetro xPos.
 * 
 * Usando modificadores de mapeamento , você pode remover optional atributos.
*/