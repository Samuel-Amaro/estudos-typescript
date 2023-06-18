/**
 * * Parameters<Type>
 * 
 *  Constrói uma tipo tupla a partir de tipos usados nos parâmetros de uma função tipo Type.
*/

declare function f1(arg: {a: number; b: string}): void;

type T7 = Parameters<() => string>;

type T8 = Parameters<(s: string) => void>;

type T9 = Parameters<<T>(arg: T) => T>;

type T10 = Parameters<typeof f1>;

type T11 = Parameters<any>;

type T12 = Parameters<never>;

type T13 = Parameters<string>;

type T14 = Parameters<Function>;