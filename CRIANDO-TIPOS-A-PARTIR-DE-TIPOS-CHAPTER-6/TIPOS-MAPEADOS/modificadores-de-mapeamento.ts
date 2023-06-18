/**
 * * MODIFICADORES DE MAPEAMENTO
 * 
 * Existem dois modificadores adicionais que podem ser aplicados durante o mapeamento: readonly e ? que afetam a mutabilidade e a opcionalidade, respectivamente.
 * 
 * Você pode remover ou adicionar esses modificadores prefixando com - ou +. Se você não adicionar um prefixo, + será assumido.
*/

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    //removendo o modificador readonly
    -readonly [Property in keyof Type]: Type[Property];
};

//declara um novo tipo de objeto
type LockedAccount = {
    //propriedades, add modificadores de proprieddes, que tornam as proprieddes somente leitura
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties

type Concrete<Type> = {
    //remove o modificador ?(opcional) da propriedade
    [Property in keyof Type]-?: Type[Property];
}

//declara um novo tipo de objeto
type MaybeUser = {
    //propriedades, add modificadores de proprieddes, que tornam as proprieddes opcionais
    id: string;
    name?: string;
    age?: number;
}

type User = Concrete<MaybeUser>;
