/**
 * * ConstructorParameters<Type>
 * 
 * Constrói um tipo tupla ou array a partir dos tipos de um tipo função construtora. Isso gera um tipo tupla com todos os tipos parâmetros (ou o tipo never se Type não for uma função).
*/

type T15 = ConstructorParameters<ErrorConstructor>;

type T16 = ConstructorParameters<FunctionConstructor>;

type T17 = ConstructorParameters<RegExpConstructor>;

type T18 = ConstructorParameters<any>;

type T19 = ConstructorParameters<Function>;