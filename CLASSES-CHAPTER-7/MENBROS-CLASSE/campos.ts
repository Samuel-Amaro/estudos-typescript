/**
 * * CAMPOS(FIELDS)
 * 
 * Uma declaração de campo cria uma propriedade pública gravável em uma classe:
*/

//declaramos uma class chamada Point, vazia
class Point2{
  //declaração de propriedades publicas gravaveis
  x: number;
  y: number;
}

//declara uma nova instancia da class e atribui a constante pt
const pt = new Point2();
//gravando valores nas propriedades, automaticamente o ts inferira as propriedades como do tipo number
pt.x = 0;
pt.y = 0;

/**
 * Assim como em outros locais, a anotação de tipo é opcional, mas será implícita any se não for especificada.
 * 
 * Os campos também podem ter inicializadores ; estes serão executados automaticamente quando a classe for instanciada:
*/

//Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

/**
 * Assim como com const, let, e var, o inicializador de uma propriedade de classe será usado para inferir seu tipo:
*/

pt.x = "0";