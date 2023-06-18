/**
 * * NonNullable<Type>
 * 
 *  Constrói um tipo por excluir null e undefined de Type.
*/

type T5 = NonNullable<string | number | undefined>;

type T6 = NonNullable<string[] | null | undefined>;