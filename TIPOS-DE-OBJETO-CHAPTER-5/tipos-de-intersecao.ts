/**
 * * TIPOS DE INTERSEÇÃO(intersection types)
 * 
 * interfaces nos permitiu construir novos tipos de outros tipos, estendendo-os. O TypeScript fornece outra construção chamada tipos de interseção que é usada principalmente para combinar tipos de objetos existentes.
 * 
 * Um tipo de interseção é definido usando o &operador.
*/

//declaramos um tipo de objeto nomeado
interface Colorful{
    color: string;
}

//declaramos outro tipo de objeto nomeado
interface Circle{
    radius: number;
}

//declaramos um novo tipo chamado ColorfulCircle
//outra construção chamada tipos de interseção
//que e usada principalmente para combonar tipos de objetos exsitentes
//o tipo interseção e definido usando o & operador
//aqui combinamos dois tipos existentes para formar um novo tipo de objeto, que tem todas propriedades de Colorful e Circle tipos de objetos nomeados
type ColorfulCircle = Colorful & Circle;

/**
 * Aqui, interseccionamos Colorful e Circle produzimos um novo tipo que tem todos os membros de Colorful e Circle.
*/

//declaramos um function regular
//que declara como paramentro um circle que e do tipo interseção entre dois objetos Colorful & Circle, o paramentro ira ter todas as propriedades e metodos de ambos os objetos interseccionados
function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

//okay
//chamamos a function passando um objeto anonimo como argumento com propriedades inicializadas
draw({color: "blue", radius: 42});

//oops
//chamamos a function passando um objeto anonimo como argumento com propriedades inicializadas, mas erramos propositalmente o  nome da segunda propriedade
draw({color: "red", raidus: 42});