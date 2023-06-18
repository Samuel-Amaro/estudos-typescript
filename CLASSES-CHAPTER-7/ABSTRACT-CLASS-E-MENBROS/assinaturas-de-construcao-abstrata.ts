/**
 * * ASSINATURAS DE CONSTRUÇÃO ABASTRATA
 * 
 * Às vezes, você deseja aceitar alguma função de construtor de classe que produz uma instância de uma classe que deriva de alguma classe abstrata.
 * 
 * Por exemplo, você pode querer escrever este código:
*/

//declaramos uma function que define um paramentro chamado ctor que e do tipo Base 
function greet(ctor: typeof Base2) {
    //declaramos uma nova instancia de objeto e atribuimos a instance
    //a um poblema estamos tentanndo instancia um objeto de uma class abastrata
    const instance = new ctor();

    //chamando o metodo do objeto que não possui implementação ainda
    instance.printName();
}

/**
 * O TypeScript está informando corretamente que você está tentando instanciar uma classe abstrata. Afinal, dada a definição de greet, é perfeitamente legal escrever este código, que acabaria construindo uma classe abstrata:
*/

//BAD! RUIM
greet(Base);

/**
 * Em vez disso, você deseja escrever uma função que aceite algo com uma assinatura de construção:
*/

function greet2(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet2(Derived);
greet2(Base);

/**
 * Agora o TypeScript informa corretamente sobre quais funções de construtor de classe podem ser invocadas - Derived pode porque é concreto, mas Base não pode.
*/