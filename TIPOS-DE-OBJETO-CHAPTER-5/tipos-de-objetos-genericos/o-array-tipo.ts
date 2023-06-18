/**
 * * O ARRAY TIPO
 *  
 * Tipos de objetos genéricos geralmente são algum tipo de contêiner que funciona independentemente do tipo de elemento que eles contêm. É ideal que as estruturas de dados funcionem dessa maneira para que sejam reutilizáveis ​​em diferentes tipos de dados.
 * 
 * Acontece que trabalhamos com um tipo exatamente como esse ao longo deste manual: o Array tipo. Sempre que escrevemos tipos como number[] ou string[], isso é apenas uma abreviação para Array<number> e Array<string>.
*/

//declara uma function 
//que define como paramenro o tipo Array que aceita um paramentro de tipo, nos informamos com string
function doSomething(value: Array<string>) {
    //...
}

let myArray3: string[] = ["hello", "world"];

//qualquer um desses funciona!
doSomething(myArray3);
doSomething(new Array("hello", "world"));

/**
 * Muito parecido com o Box tipo acima, Array ele próprio é um tipo genérico.
 * 
 * 
*/

//declaramos um tipo de objeto nomeado chamado Array
//que define um paramentro de tipo chamado Type
interface Array2<Type>{
    //propriedades e metodos do objeto
    
    /**
    * Obtém ou define o comprimento do array.
    */
   length: number;

   /**
    * Remove o último elemento de um array e o retorna.
    * 
    * retorna um Type paramentro de tipo generico ou um undefined
    */
   pop(): Type | undefined;

   /**
    * Acrescenta novos elementos a uma array e retorna o novo comprimento da array.
    */
   push(...items: Type[]): number;

   //...
}

/**
 * O JavaScript moderno também fornece outras estruturas de dados que são genéricas, como Map<K, V>, Set<T> e Promise<T>. Tudo isso realmente significa que, por causa de como Map, Set e Promise se comportam, eles podem funcionar com qualquer conjunto de tipos.
*/
