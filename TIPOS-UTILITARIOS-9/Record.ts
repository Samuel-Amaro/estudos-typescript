/**
 * * Record<Keys, Type>
 * 
 * Constrói um tipo com um conjunto de propriedades Keys do tipo Type. Esse utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.
 * 
 * Exemplo
*/

interface InfoPagina {
    titulo: string;
}

type Pagina = "inicio" | "sobre" | "contato";

const nav: Record<Pagina, InfoPagina> = {
    sobre: {titulo: "sobre"},
    contato: {titulo: "contato"},
    inicio: {titulo: "inicio"}
};

nav.sobre;