/**
 * * ENUMERAÇÕES DE STRING
 * 
 * String enums são um conceito semelhante, mas têm algumas diferenças sutis de tempo de execução , conforme documentado abaixo. Em uma enumeração de string, cada membro deve ser inicializado com uma string literal ou com outro membro de enumeração de string.
*/

enum Direcao {
    Cima = "UP",
    Baixo = "DOWN",
    Esquerda = "LEFT",
    Direita = "RIGHT"
}

/**
 *  Embora as enums de string não tenham um comportamento de incremento automático, as enums de string têm o benefício de "serializar" bem. Em outras palavras, se você estava depurando e teve que ler o valor de tempo de execução de uma enumeração numérica, o valor geralmente é opaco - ele não transmite nenhum significado útil por conta própria (embora o mapeamento reverso geralmente possa ajudar ) . As enumerações de string permitem que você forneça um valor significativo e legível quando seu código é executado, independentemente do nome do próprio membro da enumeração.
*/