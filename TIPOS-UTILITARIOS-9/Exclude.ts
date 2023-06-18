/**
 * * Exclude<Type, ExcludedUnion>
 * 
 * Constrói um tipo excluindo de Type todos membros de união que são atribuíveis a ExcludedUnion.
*/

type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;
