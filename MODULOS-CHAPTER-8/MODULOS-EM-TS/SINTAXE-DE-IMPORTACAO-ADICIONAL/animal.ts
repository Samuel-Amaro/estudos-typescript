
//criamos um tipo de objeto Cat
//e o exportamos
export type Cat = {
    //propriedades do objeto
    breed: string;
    yearOfBirth: number;
};

//criamos uma interface, um objeto nomeado
//e o exportamos
export interface Dog{
    //propriedades do objeto
    breeds: string[];
    yearOfBirth: number;
}

//exportamos uma contante que referencia uma arrow function anonima que retorna um string valor
export const createCatName = () => "fluffy";