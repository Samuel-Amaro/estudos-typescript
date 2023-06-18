/**
 * * ARGUMENTOS REST(DESCANSO)
 * 
 * Por outro lado, podemos fornecer um número variável de argumentos de uma array usando a sintaxe de propagação. Por exemplo, o push método de arrays aceita qualquer número de argumentos:
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//add os elementos do arr2 no arr1, usando o operador spread do array que desestrutura o array em elementos individuais variaveis e fornece como argumento para o metodo push, que possui definido um paramentro rest que aceita um numero ilimitado de paramentos do tipo number
arr1.push(...arr2);

/**
 * Observe que, em geral, o TypeScript não assume que os arrays são imutáveis. Isso pode levar a alguns comportamentos surpreendentes:
*/

// O tipo inferido é number[] -- "um array com zero ou mais números",
// não especificamente dois números
const args = [8, 5];

//comportamento inesperado
const angle = Math.atan2(...args);


/**
 * A melhor correção para esta situação depende um pouco do seu código, mas em geral um const contexto é a solução mais direta:
*/

//Inferido como tupla de 2 comprimentos
//desestruturou o array em duas variaveis
const args2 = [8, 5] as const;

//OK
const angle2 = Math.atan2(...args2);

/**
 * O uso de argumentos rest pode exigir ativação downlevelIteration ao direcionar tempos de execução mais antigos.
*/