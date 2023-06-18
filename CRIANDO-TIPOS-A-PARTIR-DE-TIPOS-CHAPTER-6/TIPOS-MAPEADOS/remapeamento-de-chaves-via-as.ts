/**
 * * REMAPEAMENTO DE CHAVES VIA AS
 * 
 *  No TypeScript 4.1 e posteriores, você pode remapear chaves em tipos mapeados com uma as cláusula em um tipo mapeado:
*/

type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties];
}

/**
 * Você pode aproveitar recursos como tipos literais de modelo para criar novos nomes de propriedades a partir dos anteriores:
*/

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

//declara um novo tipo de objeto
interface Person{
    //propriedades
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

/**
 * Você pode filtrar as chaves produzindo por never meio de um tipo condicional:
*/

// Remove the 'kind' property
type RemovedKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

//declara um novo tipo de objeto
interface Circle{
    //propriedades
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemovedKindField<Circle>;

/**
 * Você pode mapear uniões arbitrárias, não apenas uniões de string | number | symbol, mas uniões de qualquer tipo:
*/

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>