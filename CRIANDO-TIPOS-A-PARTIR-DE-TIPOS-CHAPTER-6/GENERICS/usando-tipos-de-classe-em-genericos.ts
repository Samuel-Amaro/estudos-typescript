/**
 * * USANDO TIPOS DE CLASSE EM GENERICOS
 * 
 * Ao criar fábricas em TypeScript usando genéricos, é necessário referir-se aos tipos de classe por suas funções construtoras. Por exemplo,
*/

//declaramos uma function generica que aceita um paramentro de tipo chamado Type para saber qual tipo se esta trabalhando
//declara um argumento chamado c que e um objeto que possui uma assinatura de chamada que cria um novo objeto baseado em Type paramentro de tipo, a function generica retorna o mesmo 
function create<Type>(c: {new (): Type}): Type{
    return new c();
}

/**
 * Um exemplo mais avançado usa a propriedade protótipo para inferir e restringir relacionamentos entre a função do construtor e o lado da instância dos tipos de classe.
*/

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

/**
 * Este padrão é usado para alimentar o padrão de design mixins . 
*/