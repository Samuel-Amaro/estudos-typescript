/**
 * * TRABALHANDO COM VARIÁVEIS DE TIPO GENÉRICO
 * 
 * Quando você começar a usar genéricos, notará que, ao criar funções genéricas como identity, o compilador exigirá que você use corretamente quaisquer parâmetros de tipo genérico no corpo da função. Ou seja, você realmente trata esses parâmetros como se eles pudessem ser de qualquer tipo.
 * 
 * Vamos pegar nossa identity função anterior:
*/

//precisamos de uma forma de capturar o tipo do argumento de forma que possamos usá-lo para denotar o que esta sendo retornado
//usaremos aqui uma variável de tipo,
//um tipo especial de variavel que funciona com tipos em vez de valores
//adicionamos uma variavel de tipo Type a function
//a Type variavel nos permite capturar o tipo que o usuario fornece para que possamos usar essa informacao posteriormente
//aqui usamos para forcecer o tipo de retorno da function, sera igual ao tipo de argumento fornecido
//esta versão da function identity e generica pois funciona em varios tipos
function identity3<Type>(arg: Type): Type{
    return arg;
}

/**
 * E se quisermos também registrar o tamanho do argumento arg no console a cada chamada? Podemos ser tentados a escrever isto:
*/

//declaramos uma function generica logginIdentity, que declara um variavel de paramentro de tipo para usar depois
function logginIdentity<Type>(arg: Type): Type{
    //tentando registrar o tamnho do argumento arg no console a cada chamada
    console.log(arg.length);
    return arg;
}

/**
 * Quando o fizermos, o compilador nos dará um erro informando que estamos usando o .length membro de arg, mas em nenhum lugar dissemos que arg tem esse membro. Lembre-se, dissemos anteriormente que essas variáveis ​​de tipo representam todo e qualquer tipo, portanto, alguém usando essa função poderia ter passado um number , que não possui um .length membro.
 * 
 * Digamos que pretendemos que essa função funcione em arrays de Type em vez de Type diretamente. Como estamos trabalhando com arrays, o .length membro deve estar disponível. Podemos descrever isso da mesma forma que criaríamos arrays de outros tipos:
*/

//declaramos uma function generica logginIdentity, que declara um variavel de paramentro de tipo para usar depois
//podemos ler o Type de logginIndetity2 como uma function generica que recebe um paramentro de tipo Type e um argumento arg que e um array de Types e retorna um array de Types
function logginIdentity2<Type>(arg: Type[]): Type[]{
    //tentando registrar o tamnho do argumento arg no console a cada chamada
    console.log(arg.length);
    return arg;
}

/**
 * Você pode ler o tipo de loggingIdentity como “a função genérica loggingIdentity recebe um parâmetro de tipo Type e um argumento arg que é uma array de Types e retorna uma array de Types”. Se passássemos uma array de números, obteríamos uma array de números de volta, como Type seria vinculada a number. Isso nos permite usar nossa variável de tipo genérico Type como parte dos tipos com os quais estamos trabalhando, em vez do tipo inteiro, o que nos dá maior flexibilidade.
 * 
 * Alternativamente, podemos escrever o exemplo de amostra desta maneira:
*/

//mesma coisa do exemplo acima, so que estamos declara um arg do tipo Array que contera elementos do tipo Type
//e retorna um array de elementos do tipo Type
function logginIdentity3<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array tem um .length, então não há mais erro
    return arg;
}

/**
 * Você já deve estar familiarizado com esse estilo de tipo de outros idiomas. Na próxima seção, abordaremos como você pode criar seus próprios tipos genéricos, como Array<Type>.
*/