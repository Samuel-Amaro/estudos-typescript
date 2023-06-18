/**
 * * ReturnType<Type>
 * 
 * Constrói um tipo consistindo do tipo retorno da função Type.
*/

declare function f1(): {
    a: number;
    b: string;
}

type T20 = ReturnType<() => string>;

type T21 = ReturnType<(s: string) => void>;

type T22 = ReturnType<<T>() => T>;

type T23 = ReturnType<<T extends U, U extends number[]>() => T>;

type T24 = ReturnType<typeof f1>;

type T25 = ReturnType<any>;

type T26 = ReturnType<never>;

type T27 = ReturnType<string>;

type T28 = ReturnType<Function>;