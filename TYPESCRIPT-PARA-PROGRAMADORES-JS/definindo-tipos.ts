/**
 * * DEFININDO TIPOS
 * 
 * Você pode usar uma ampla variedade de tipos de padrões de projetos no JavaScript. Entretanto, alguns padrões de projeto tornam a inferência de tipos automática difícil (por exemplo, padrões que usam programação dinâmica). Para cobrir estes casos, TypeScript suporta uma extensão do JavaScript, que oferece lugares para que você diga ao TypeScript quais deveriam ser os tipos.
 * 
 * Por exemplo, para criar um objteo com um tipo inferido que inclui name: string e id: number, você pode escrever:
*/

//criando uma objeto com um tipo inferido
const usuarioPrimary = {
    nome: 'Hayes',
    id: 0
};

/**
 * Você pode explicitamente descrever a forma desse objeto usando uma declaração de interface:
*/

//descrevendo explicitamente a forma que eu quero 
//que o objeto usuario tenha, usando uma declaração
//de interface
interface Usuario {
    nome: string;
    id: number;
}

/**
 * Você pode então declarar um objeto JavaScript conforme o formato da sua nova interface usando a sintaxe :TypeName depois da declaração de uma variável:
*/

//declarando um objeto JS conforme o formato da 
//nova interface usando a sintaxe :TypeName depois
//da declaração de uma variavel
const usuarioSecundary: Usuario = {
    nome: 'Hayes',
    id: 0
};

/**
 * Se você fornecer um objeto que não corresponde a interface que você forneceu, o TypeScript vai te alertar:
*/

//fornecendo um objeto que não
//corresponde a inteface que fornecemos
/*const usuarioThree: Usuario = {
    nomeDeUsuario: 'Hayes',
    id: 0
};*/

/**
 * Já que o JavaScript suporta classes e programação orientada a objeto, TypeScript também. Você pode usar a declaração de interface com classes:
*/

//usando classes e OOP com TS
class UsuarioConta {
    nome: string;
    id: number;

    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
}

const usuarioFor: Usuario = new UsuarioConta('Murphy', 1);

/**
 * Você pode usar interfaces para tipar parâmetros e valores de retorno em funções:
*/

//usando as interfaces para tipar valores de retorn de functions
function buscarUsuarioAdmin(): Usuario {
    //...
    return new UsuarioConta('teste', 1);
}

//e paramentros
function deletarUsuario(usuario: Usuario) {
    //...
}

/**
 * Já há um pequeno conjunto de tipos primitivos disponíveis em JavaScript: boolean, bigint, null, number, string, symbol, e undefined, que você pode usar em uma interface. TypeScript extende essa lista com mais alguns como any (permitir qualquer coisa), unknown (garanta que alguém usando esse tipo declare qual tipo é), never (não é possível que esse tipo aconteça), e void (uma função que retorna undefined ou que não tem valor de retorno).
 * 
 * Você verá que há duas sintaxes para construir tipos: Interfaces e Types. Você deve preferir interface. Use type quando precisar de funcionalidades específicas.
*/