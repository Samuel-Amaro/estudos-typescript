/**
 * * SISTEMA DE TIPOS ESTRUTURAIS
 * 
 * Um dos princípios centrais do TypeScript é que a checagem de tipo é focada no formato que os valores têm. Isso é chamado as vezes de “tipagem do pato” ou “tipagem estrutural”.
 * 
 * Em um sistema de tipagem estruturado, se dois objetos tem o mesmo formato, eles são considerados do mesmo tipo.
*/

//descrevendo explicitamente a forma que eu quero 
//que o objeto Ponto tenha, usando uma declaração de interface
interface Ponto {
    x: number;
    y: number;
};

//tipagem de paramentro
function exibirPonto(p: Ponto) {
    console.log(`${p.x}, ${p.y}`);
}

//exibe "12, 26"
const ponto = {x: 12, y: 26};
exibirPonto(ponto);

/**
 * A variável ponto nunca é declarada como sendo do tipo Ponto. Entretanto, o TypeScript compara o formato de ponto ao formato de Ponto na checagem de tipo. Eles têm o mesmo formato, então o código passa.
 * 
 * A correspondência de tipo só requere que um subconjunto de campos do objeto sejam correspondentes:
*/

const ponto3 = {x: 12, y: 26, z: 89};
exibirPonto(ponto3); //logs "12, 26"

const rect = {x: 33, y: 3, largura: 30, altura: 80};
exibirPonto(rect); //logs "33, 3"

const color = {hex: '#187ABF'};
//exibirPonto(color);

/**
 * Não há diferença entre como as classes e os objetos se conformam aos formatos:
*/

class PontoVirtual{
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const novoPontoV = new PontoVirtual(13, 56);
exibirPonto(novoPontoV); //logs "13, 56"

/**
 * Se o objeto ou classe tem todas as propriedades requeridas, TypeScript dirá que eles são correspondentes, independente dos detalhes de implementação. 
*/