/**
 * * ThisType<Type>
 * 
 *  Esse utilitário não retorna um tipo transformado. Ao invés, serve como um marcador para um tipo contextual this. Note que a flag --noImplicitThis precisa ser ativada para usar esse utilitário.
*/

type DescritorDeObjeto<D, M> = {
    dado?: D;
    metodos?: M & ThisType<D & M>; //Tipo de this
};

function fazObjeto<D, M>(desc: DescritorDeObjeto<D, M>): D & M{
    let dado: object = desc.dado || {};
    let metodos: object = desc.metodos || {};
    return {...dado, ...metodos} as D & M;
}

let obj1 = fazObjeto({
    dado: {x: 0, y: 0},
    metodos: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        },
    },
});

obj1.x = 10;
obj1.y = 20;
obj1.moveBy(5, 2);

/**
 * No exemplo acima, o objeto metodos no argumento para fazObjeto tem um tipo contextual que inclui EsseTipo<D & M> portanto o tipo de this em metodos dentro do objeto metodos é { x: number, y: number } & { movePor(dx: number, dy: number): number }. Perceba como o tipo da propriedade metodos é simultaneamente uma interface alvo e a fonte para o tipo this nos metodos.
 * 
 * O marcador interface EsseTipo<T> é simplesmente uma interface vazia declarada em lib.d.ts. Além de ser reconhecida no tipo contextual de um objeto literal, a interface age como qualquer interface vazia.
*/