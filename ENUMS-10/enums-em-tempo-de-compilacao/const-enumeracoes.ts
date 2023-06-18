/**
 * * const enumerações
 * 
 * Na maioria dos casos, enums são uma solução perfeitamente válida. No entanto, às vezes os requisitos são mais rígidos. Para evitar pagar o custo de código extra gerado e indireção adicional ao acessar valores enum, é possível usar const enums. As enumerações const são definidas usando o const modificador em nossas enumerações:
*/

const enum Enum1 {
    A = 1, 
    B = A * 2,
}

/**
 * As enums const só podem usar expressões de enum constantes e, ao contrário das enums regulares, elas são completamente removidas durante a compilação. Os membros do enum const são embutidos nos sites de uso. Isso é possível porque const enums não podem ter membros calculados.
*/

const enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right, //3
}

let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right
];

/**
 * no código gerado se tornará
 
"use strict";

let directions = [
    0, //Direction.Up,
    1, //Direction.Down,
    2, //Direction.Left,
    3, //Direction.Right,
];
 
*/

/**
 * * ARMADILHAS DE ENUMERAÇÃO CONST
 * 
 * Inlining valores de enumeração é simples no início, mas vem com implicações sutis. Essas armadilhas dizem respeito apenas a const enums de ambiente (basicamente const enums em arquivos .d.ts) e ao compartilhamento entre projetos, mas se você estiver publicando ou consumindo arquivos .d.ts, essas armadilhas provavelmente se aplicam a você, porque tsc --declaration transforma arquivos .ts em arquivos .d.ts.
 * 
 * Pelas razões expostas na documentação de IsolatedModules, esse modo é fundamentalmente incompatível com const enums de ambiente. Isso significa que, se você publicar const enums de ambiente, os consumidores downstream não poderão usar os IsolatedModules e esses valores de enum ao mesmo tempo.
 * 
 * Você pode facilmente inserir valores da versão A de uma dependência em tempo de compilação e importar a versão B em tempo de execução. Os enums das versões A e B podem ter valores diferentes, se você não for muito cuidadoso, resultando em bugs surpreendentes, como tomar ramificações erradas de instruções if. Esses bugs são especialmente perniciosos porque é comum executar testes automatizados aproximadamente ao mesmo tempo em que os projetos são construídos, com as mesmas versões de dependência, o que evita completamente esses bugs.
 * 
 * importsNotUsedAsValues: "preserve" não eliminará as importações de const enums usados como valores, mas const enums de ambiente não garantem a existência de arquivos .js de tempo de execução. As importações não resolvidas causam erros no tempo de execução. A maneira usual de eliminar importações de forma inequívoca, importações somente tipo, não permite valores const enum, atualmente.
 * 
 * Aqui estão duas abordagens para evitar essas armadilhas:
 * 
 * A. Não use const enums. Você pode facilmente banir const enums com a ajuda de um linter. Obviamente, isso evita problemas com const enums, mas evita que seu projeto inlinhe seus próprios enums. Ao contrário do inlining de enums de outros projetos, o inlining dos próprios enums de um projeto não é problemático e tem implicações de desempenho. B. Não publique const enums de ambiente, desconstificando-os com a ajuda de preserveConstEnums. Essa é a abordagem adotada internamente pelo próprio projeto TypeScript. preserveConstEnums emite o mesmo JavaScript para const enums como enums simples. Você pode remover com segurança o modificador const dos arquivos .d.ts em uma etapa de compilação.
 * 
 * Desta forma, os consumidores downstream não irão incorporar enums de seu projeto, evitando as armadilhas acima, mas um projeto ainda pode inline seus próprios enums, ao contrário de banir totalmente const enums.
*/