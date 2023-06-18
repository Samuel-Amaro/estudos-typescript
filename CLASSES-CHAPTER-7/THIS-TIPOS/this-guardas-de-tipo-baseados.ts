/**
 * * THIS GUARDAS DE TIPO BASEADOS
 * 
 * Você pode usar this is Type na posição de retorno para métodos em classes e interfaces. Quando misturado com uma restrição de tipo (por exemplo if, instruções), o tipo do objeto de destino seria reduzido ao especificado Type.
*/

//declara uma class
class FileSystemObject {
   //menbros da class
   
  //declaramos um metodo da class
  //Você pode usar this is Type na posição de retorno para métodos em classes e interfaces.
  //Quando misturado com uma restrição de tipo (por exemplo if, instruções), o tipo do objeto de destino seria reduzido ao especificado Type
  //o tipo especial this, refere-se dinamicamente ao tipo da classe atual
  //o metodo retorna true se o tipo da class atual e FileRep
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }

  //o metodo retorna true se o tipo da class atual e Directory
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }

  //o metodo retorna true se o tipo da class atual e Networked
  isNetworked(): this is Networked & this {
    return this.networked;
  }

  //metodo especial da class que cria e inicializada um novo objeto
  constructor(public path: string, private networked: boolean) {}
}
 
//definição de class filha
class FileRep extends FileSystemObject {
    //menbros da class

    //metodo especial da class que cria e inicializada um novo objeto
    constructor(path: string, public content: string) {
        //Se houver um construtor presente na subclasse, ele precisará primeiro chamar super() antes de usar "this".
        super(path, false);
  }
}

//definição de uma class filha
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
//cria um novo tipo de objeto
interface Networked {
  host: string;
}

//cria um nova instancia de objeto e atribui a fso, fso esta definido como do tipo da class pai
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}

/**
 * Um caso de uso comum para um guarda de tipo baseado nisso é permitir a validação preguiçosa de um campo específico. Por exemplo, este caso remove um undefined do valor mantido dentro da caixa quando hasValue foi verificado como verdadeiro:
*/

//declaramos uma class generica que definie um paramentro de tipo T
class Box3<T>{
    //menbros da class

    //definimos uma propriedade opcional do tipo do paramentro de tipo T, fornecido pelo usuario
    value?: T;

    //declaramos um metodo
    //o metodo retorna true ou false, true se o valor de referencia a class atual this, e um objeto que possui uma propriedade value do tipo do paramentro de tipo T
    //e se for diferente dee undefined
    hasValue(): this is { value: T} {
        return this.value !== undefined;
    }
}

//declaramos uma nova instancia de objeto da class pai e atribuimos a box
const box = new Box3();
box.value = "Gameboy";
box.value;

if(box.hasValue()) {
    box.value;
}