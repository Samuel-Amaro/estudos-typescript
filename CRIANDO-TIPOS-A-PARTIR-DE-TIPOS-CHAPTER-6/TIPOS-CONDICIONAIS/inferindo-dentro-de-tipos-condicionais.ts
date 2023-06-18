/**
 * * INFERINDO DENTRO DE TIPOS CONDICIONAIS
 * 
 *  Acabamos de nos encontrar usando tipos condicionais para aplicar restrições e, em seguida, extrair os tipos. Isso acaba sendo uma operação tão comum que os tipos condicionais facilitam.
 * 
 * Os tipos condicionais nos fornecem uma maneira de inferir dos tipos com os quais comparamos na ramificação verdadeira usando a palavra-chave infer. Por exemplo, poderíamos ter inferido o tipo de elemento em Flatten vez de buscá-lo “manualmente” com um tipo de acesso indexado:
*/

//declara uum novo tipo generico, aceita um paramentro de tipo Type, se o paramentro de tipo Type for atribuivel a um array retornamos um array com o primeira propriedade numerica encontrada
//se não retornamos somente o array
//usamos a palavra-chave infer para introduzir uma nova variavel de tipo generica nomeada Item
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

/**
 * Aqui, usamos a infer palavra-chave para introduzir declarativamente uma nova variável de tipo genérico nomeada Item em vez de especificar como recuperar o tipo de elemento T dentro da ramificação verdadeira. Isso nos livra de ter que pensar em como vasculhar e sondar a estrutura dos tipos nos quais estamos interessados.
 * 
 * Podemos escrever alguns aliases úteis de tipo auxiliar usando a palavra- infer chave. Por exemplo, para casos simples, podemos extrair o tipo de retorno dos tipos de função:
*/

//declaramos um tipo generico que define um paramentro de tipo Type, o paramentro de tipo Type e restritiro a tipos que sejam atribuiveis do tipo da function que aceita um numero aleatorio de argumento do tipo never, e retorna return se tiver um tipo de retorno, se não retornar never
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

//declara um novo tipo com o tipo de retorno do argumento de tipo fornecido
type Num2 = GetReturnType<() => number>;

type Str2 = GetReturnType<(x: string) => string>;

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

/**
 * Ao inferir de um tipo com várias assinaturas de chamada (como o tipo de uma função sobrecarregada), as inferências são feitas a partir da última assinatura (que, presumivelmente, é o caso abrangente mais permissivo). Não é possível executar a resolução de sobrecarga com base em uma lista de tipos de argumento.
*/

//declara uma assinatura de um function
declare function stringOrNum(x: string): number;

//declara uma assinatura de sobrecarga de uma function
declare function stringOrNum(x: number): string;

//declara outra assinatura de sobrecarga de uma function
declare function stringOrNum(x: string | number): string | number;

//declarmaos um novo tipo baseado no tipo do retorno do paramentro de tipo fornecido para ReturnType
type T1 = ReturnType<typeof stringOrNum>;