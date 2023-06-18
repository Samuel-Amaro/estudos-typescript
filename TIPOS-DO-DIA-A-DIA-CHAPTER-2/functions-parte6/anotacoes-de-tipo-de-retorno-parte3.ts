/**
 * * ANOTAÇÕES DE TIPO DE RETORNO
 * 
 *  Você também pode adicionar anotações de tipo de retorno. As anotações do tipo de retorno aparecem após a lista de parâmetros:
*/

//add anotações de tipo de retorno
//as anotações de tipo de retorno aparecem após a lista de paramentros
//aqui essa function retorna um valor do tipo number
function getFavoriteNumber(): number {
    return 26;
}

/**
 * Assim como as anotações de tipo de variável, você geralmente não precisa de uma anotação de tipo de retorno porque o TypeScript inferirá o tipo de retorno da função com base em suas return instruções. A anotação de tipo no exemplo acima não muda nada. Algumas bases de código especificarão explicitamente um tipo de retorno para fins de documentação, para evitar alterações acidentais ou apenas para preferência pessoal.
*/