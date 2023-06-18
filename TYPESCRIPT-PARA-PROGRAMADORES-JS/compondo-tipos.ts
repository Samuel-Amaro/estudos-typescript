/**
 * * COMPONDO TIPOS
 * 
 * Com TypeScript, você pode criar tipos complexos combinando os simples. Existem duas formas populares de fazer isso: com uniões, e com genéricos.
 * 
 * * Uniões
 * 
 * Com uma união, você pode declarar que um tipo pode ser um de muitos. Por exemplo, você pode descrever um tipo boolean como sendo true ou false:
*/

//compondo tipos complexos usando uniões(unions)
//podemos declarar que um tipo pode ser um de muitos
//descrevemos um tipo boolean como sendo true ou false
type MeuBooleano = true | false;

/**
 * Nota: se você passar o mouse por cima do MeuBoleano acima, você verá que é classificado como boolean. Essa é uma propriedade do Sistema de Tipos Estruturais. Mais sobre isso abaixo.
 * 
 * Um caso de uso popular de tipos uniões é para descrever o valor que um conjunto de literais de string ou number pode ter:
*/

//compondo tipos complexos usando uniões(unions)
//podemos declarar que um tipo pode ser um de muitos
//aqui temos um caso de uso popular para descrever o valor que um conjunto de literais de string ou number pode ter
type EstadoDaJanela = 'aberto' | 'fechado' | 'minimizado';
type EstadosDeBloqueio = 'trancado' | 'destrancado';
type NumerosImparesMenoresQue10 = 1 | 3 | 5 | 7 | 9;

/**
 * Uniões fornecem uma forma de gerenciar tipos diferentes também. Por exemplo, você pode ter uma função que recebe como argumento um array ou uma string:
*/

//usando uniões para gerenciar tipos diferentes
//podemos ter uma function que receba como argumento um array ou uma string
function buscarComprimento(obj: string | string[]) {
    return obj.length;
}

/**
 * Para saber o tipo de uma variável, use typeof:
 
    Tipo	    Predicado
    string	    typeof s === "string"
    number	    typeof n === "number"
    boolean	    typeof b === "boolean"
    undefined	typeof undefined === "undefined"
    function	typeof f === "function"
    array	    Array.isArray(a)

 *
 * Por exemplo, você pode fazer uma função retornar diferentes tipos dependendo se uma string ou um array forem passados:
*/

//dependendo do tipo do paramentro passado
//a um retorna diferente
function envolverEmArray(obj: string | string[]) {
    if(typeof obj === "string") {
        return [obj];
    }
    return obj;
}

/**
 * * GENÉRICOS(GENERYS)
 * 
 * Genéricos fornecem variáveis para tipos. Um exemplo comum é um array. Um array sem genéricos pode conter qualquer coisa. Um array com genéricos pode descrever os valores que aquele array contém.
*/

//usando generys para compor tipos
//aqui declaramos um array que pode ter valores somente do tipo string
type ArrayDeStrings = Array<string>;
//array somente de numeros
type ArrayDeNumeros = Array<number>;
//array somente de objetos
type ObjetoComNomeArray = Array<{nome: string}>;

/**
 * Você pode declarar seus próprios tipos usando genéricos:
*/

//descrevendo explicitamente a forma que eu quero 
//que o objeto Mochila tenha, usando uma declaração de interface
//aqui estamos declarando nosso proprio tipo usando Generico, podendo definir mochila como qualquer tipo
interface Mochila<Tipo> {
    adicionar: (obj: Tipo) => void; 
    buscar: () => Tipo;
}

// Esse é um atalho para dizer ao Typescript que há uma
// constante chamada mochila, e não se preocupar de onde ela veio.
declare const mochila: Mochila<string>;

// objeto é uma string, porque nós o declaramos acima como a parte variável de Mochila.
const objeto = mochila.buscar();

// Já que a variável mochila é uma string, você não pode passar um número para a função adicionar.
//mochila.adicionar(23);