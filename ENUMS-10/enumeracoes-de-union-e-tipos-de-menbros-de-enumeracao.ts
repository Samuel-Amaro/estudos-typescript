/**
 * * ENUMERAÇÕES DE UNIÃO E TIPOS DE MENBROS DE ENUMERAÇÃO
 * 
 *  Há um subconjunto especial de membros de enumeração constantes que não são calculados: membros de enumeração literais. Um membro de enumeração literal é um membro de enumeração constante sem valor inicializado ou com valores que são inicializados para
 * 
 * qualquer string literal (por exemplo "foo", "bar, , "baz")
 * 
 * qualquer literal numérico (por exemplo 1, , 100)
 * 
 * um sinal de menos unário aplicado a qualquer literal numérico (por exemplo -1, , -100)
 * 
 * Quando todos os membros em uma enumeração têm valores de enumeração literais, algumas semânticas especiais entram em ação.
 * 
 * A primeira é que os membros do enum também se tornam tipos! Por exemplo, podemos dizer que certos membros só podem ter o valor de um membro enum:
*/

enum ShapeKind{
    Circle, //0
    Square, //1
}

interface Circle {
    Kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square,
    radius: 100
};

/**
 * A outra mudança é que os próprios tipos de enumeração efetivamente se tornam uma união de cada membro da enumeração. Com enums de união, o sistema de tipo é capaz de aproveitar o fato de conhecer o conjunto exato de valores que existe no próprio enum. Por causa disso, o TypeScript pode detectar bugs em que podemos comparar valores incorretamente. Por exemplo:
*/

enum E {
    Foo, //0
    Bar, //1
}

function f(x: E) {
    if(x !== E.Foo || x !== E.Bar) {
        //
    } 
}

/**
 * Nesse exemplo, primeiro verificamos se x não era E.Foo. Se essa verificação for bem-sucedida, então nosso || entrará em curto-circuito e o corpo do 'se' será executado. No entanto, se a verificação não for bem-sucedida, então x só pode ser E.Foo, então não faz sentido ver se é igual a E.Bar.
*/