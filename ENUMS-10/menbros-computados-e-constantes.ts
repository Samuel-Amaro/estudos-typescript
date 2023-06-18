/**
 * * MENBROS COMPUTADOS E CONSTANTES
 * 
 *  Cada membro enum tem um valor associado a ele que pode ser constante ou computado . Um membro de enum é considerado constante se:
 * 
 * É o primeiro membro da enumeração e não possui inicializador, caso em que é atribuído o valor 0:
*/

//E.X é constante
enum E {
    X, //X é primeiro menbro da enumeração e não possui inicializador,
}

/**
 * Ele não tem um inicializador e o membro de enumeração anterior era uma constante numérica . Nesse caso, o valor do membro de enumeração atual será o valor do membro de enumeração anterior mais um.
*/

//Todos enums menbros em 'E1' é 'E2' são constante.

//
enum E1 {
    X, //0
    Y, //1
    Z //2
}

enum E2 {
    A = 1,
    B, //2
    C, //3
}

/**
 * O membro enum é inicializado com uma expressão enum constante. Uma expressão de enumeração constante é um subconjunto de expressões TypeScript que podem ser totalmente avaliadas em tempo de compilação. Uma expressão é uma expressão de enumeração constante se for:
 * 
    * uma expressão de enumeração literal (basicamente uma string literal ou um literal numérico)
    * 
    * uma referência ao membro enum constante definido anteriormente (que pode se originar de um enum diferente)
    * 
    * uma expressão de enumeração constante entre parênteses
    * 
    * um dos +, -, ~ operadores unários aplicados à expressão de enumeração constante
    * 
    * +, -, *, /, %, <<, >>, >>>, &, |, ^ operadores binários com expressões enum constantes como operandos
    * 
 * É um erro de tempo de compilação para expressões de enumeração constantes serem avaliadas como NaN ou Infinity.
 * 
 * Em todos os outros casos, o membro enum é considerado computado.
*/

enum FileAcess {
    //constante menbros
    None, //0
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    //computed menber
    G = "123".length,
}