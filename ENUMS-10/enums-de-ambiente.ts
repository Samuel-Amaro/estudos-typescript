/**
 * * ENUMS DE AMBIENTE
 * 
 *  As enumerações de ambiente são usadas para descrever a forma dos tipos de enumeração já existentes.
*/

declare enum Enum {
    A = 1,
    B,
    C = 2
};

/**
 * Uma diferença importante entre enums de ambiente e não ambiente é que, em enums regulares, os membros que não têm um inicializador serão considerados constantes se seu membro de enumeração anterior for considerado constante. Por outro lado, um membro de enumeração ambiente (e não constante) que não possui um inicializador é sempre considerado computado.
*/