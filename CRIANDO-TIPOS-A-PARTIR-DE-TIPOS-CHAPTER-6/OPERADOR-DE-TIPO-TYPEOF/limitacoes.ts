/**
 * * LIMITAÇÕES
 * 
 *  O TypeScript limita intencionalmente os tipos de expressões que você pode usar typeof.
 * 
 * Especificamente, é legal usar apenas typeof em identificadores (ou seja, nomes de variáveis) ou suas propriedades. Isso ajuda a evitar a armadilha confusa de escrever um código que você acha que está executando, mas não está:
*/

//Destina-se a usar = ReturnType<typeof msgbox>
//a expressão abaixo não funcionao o typeod não funciona aqui nesta expressão,o typescript o limita a ser usado em lugares espeficiso, aqui não funciona.
let shouldContinue: typeof msgbox("Are you sure you want to continue?");