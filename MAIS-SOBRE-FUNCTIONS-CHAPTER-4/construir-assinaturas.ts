/**
 * * CONSTRUIR ASSINATURAS(Construct Signatures) 
 * 
 * As funções JavaScript também podem ser invocadas com o new operador. O TypeScript se refere a eles como construtores porque geralmente criam um novo objeto. Você pode escrever uma assinatura de construção adicionando a palavra-chave new na frente de uma assinatura de chamada:
*/

//declara um tipo de objeto do tipo SomeConstructor
type SomeConstructor = {
    //escrevendo uma assinatura de construção adicionando a new palavra chave na frente da assinatura de chamada
    //essa assintatura de chamada permite o objeto ser invovcado com a new plavra chave recebendo um argumento string e retornando um SomeObject
    new (s: string): SomeObject;
};

//declara uma function regular que possui um paramentro ctor do tipo SomeConstructor
function fn(ctor: SomeConstructor) {
    //retorna um novo objeto
    return new ctor("hello");
}

/**
 * Alguns objetos, como o objeto do JavaScript Date, podem ser chamados com ou sem new. Você pode combinar assinaturas de chamada e construção no mesmo tipo arbitrariamente:
*/

//declara um objeto do tipo CallOrConstruct
interface CallOrConstruct{
    //declara uma assinatura de construção que permite o objeto ser invocado com a new palavra-chave e retorna um novo Objeto
    new (s: string): Date;
    //declara uma assinatura de chamada que permite o objeto ser chamado como uma function com propriedades
    (n?: number): number;
}
