/**
 * * TIPOS MAPEADOS
 * 
 *  Quando você não quer se repetir, às vezes um tipo precisa ser baseado em outro tipo.
 * 
 * Os tipos mapeados se baseiam na sintaxe para assinaturas de índice, que são usadas para declarar os tipos de propriedades que não foram declaradas antecipadamente:
*/

//declara um novo tipo
type OnlyBoolsAndHOrses = {
    //assinatura de chave do tipo string, para propriedades do tipo boolean ou Horse
    [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHOrses = {
    del: true,
    rodney: false,
};

/**
 * Um tipo mapeado é um tipo genérico que usa uma união de PropertyKeys (frequentemente criada por meio de a keyof ) para iterar por meio de chaves para criar um tipo:
*/

//criamos um novo tipo generico, que aceita um paramentro de tipo chamado Type
type OptionsFlags<Type> = {
    //Property e um tipo de paramentro de tipo, para obter o tipo das chaves
    [Property in keyof Type]: boolean;
};

/**
 * Neste exemplo, OptionsFlags irá pegar todas as propriedades do tipo Type e mudar seus valores para um booleano.
*/

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;