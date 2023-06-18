/**
 * * Extract<Type, Union>
 * 
 *  Constrói um tipo extraindo de Type todos membros de união que são atribuíveis a Union.
*/

type T3 = Extract<"a" | "b" | "c", "a" | "f">;

type T4 = Extract<string | number | (() => void), Function>;

