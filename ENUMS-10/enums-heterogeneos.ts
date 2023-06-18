/**
 * * ENUMS HETEROGÊNEOS
 * 
 *  Tecnicamente, enums podem ser misturados com strings e membros numéricos, mas não está claro por que você faria isso:
*/

//enums heterogeneos, misturados
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

/**
 * A menos que você esteja realmente tentando tirar proveito do comportamento do tempo de execução do JavaScript de uma maneira inteligente, é aconselhável que você não faça isso.
*/