/**
 * * InstanceType<Type>
 * 
 * Constrói um tipo consistindo do tipo instancia de uma função construtora em Type.
*/

class C {
    x = 0;
    y = 0;
}

type T29 = InstanceType<typeof C>;

type T30 = InstanceType<any>;

type T31 = InstanceType<never>;

type T32 = InstanceType<string>;

type T33 = InstanceType<Function>;