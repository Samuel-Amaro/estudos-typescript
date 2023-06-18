/**
 * * VOID(vazio)
 * 
 *  void representa o valor de retorno de funções que não retornam um valor. É o tipo inferido sempre que uma função não possui nenhuma return instrução ou não retorna nenhum valor explícito dessas instruções de retorno:
*/

//o tipo de retorno inferido e void
function noop() {
    //retorna void
    return;
}

/**
 * Em JavaScript, uma função que não retorna nenhum valor retornará implicitamente o valor undefined. No entanto, void e undefined não são a mesma coisa no TypeScript. Há mais detalhes no final deste capítulo.
 * 
 * void não é o mesmo que undefined.
*/