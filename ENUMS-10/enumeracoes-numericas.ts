/**
 * * ENUMERAÇÕES NUMÉRICAS
 *  
 * Começaremos primeiro com enums numéricos, que provavelmente são mais familiares se você vier de outros Linguagens. Uma enumeração pode ser definida usando a enum palavra-chave.
*/

//Enums permitem que um desenvolvedor defina um conjunto de constantes nomeadas.
//enums numéricos
//definindo uma enumeração usando a enum palavra-chave
enum Direction {
    Up = 1,
    //os menbros são incrementados automaticamente a partir desse ponto
    Down, //2
    Left, //3
    Right, //4
};

/**
 * Acima, temos um enum numérico onde Up é inicializado com 1. Todos os membros a seguir são incrementados automaticamente a partir desse ponto. Em outras palavras, Direction.Up tem o valor 1, Down tem 2, Left tem 3 e Right tem 4.
 * 
 * Se quiséssemos, poderíamos omitir totalmente os inicializadores:
*/

enum Direction2{
    Up, //0
    Dowm, //1
    Left, //2
    Right, //3
}

/**
 * Aqui, Up teria o valor 0, Down teria 1, etc. Esse comportamento de incremento automático é útil para casos em que podemos não nos importar com os próprios valores de membros, mas nos importamos que cada valor seja distinto de outros valores na mesma enumeração.
 * 
 * Usar um enum é simples: basta acessar qualquer membro como uma propriedade fora do próprio enum e declarar tipos usando o nome do enum:
*/

enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
    //...
}

respond("Princess Caroline", UserResponse.Yes);

/**
 * As enumerações numéricas podem ser misturadas em membros computados e constantes (veja abaixo) . A história curta é que enums sem inicializadores precisam ser os primeiros ou devem vir depois de enums numéricos inicializados com constantes numéricas ou outros membros de enumeração constantes. Em outras palavras, o seguinte não é permitido:
*/

enum E {
    A = getSomeValue(),
    B,
}