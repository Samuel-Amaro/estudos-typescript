/***
 * * O BÁSICO
 * 
 * Todo e qualquer valor em JavaScript tem um conjunto de comportamentos que você pode observar ao executar diferentes operações. Isso parece abstrato, mas como um exemplo rápido, considere algumas operações que podemos executar em uma variável chamada message.
*/

// Acessando a propriedade 'toLowerCase'
// em 'mensagem' e depois chamando
//Todo e qualquer valor em JavaScript tem um conjunto de comportamentos que você pode observar ao executar diferentes operações.
//O comportamento de cada operação depende inteiramente do valor que tínhamos em primeiro lugar.
//message.toLowerCase();

//chamando 'message'
//message();

/**
 * Se decompormos isso, a primeira linha de código executável acessa uma propriedade chamada toLowerCasee a chama. O segundo tenta ligar messagediretamente.
 * 
 * Mas supondo que não saibamos o valor de message- e isso é bastante comum - não podemos dizer com segurança quais resultados obteremos ao tentar executar qualquer parte desse código. O comportamento de cada operação depende inteiramente do valor que tínhamos em primeiro lugar.
 * 
    * É message exigível? 
    * 
    * Ele tem uma propriedade chamada toLowerCase nele?
    * 
    * Se isso acontecer, é toLowerCase mesmo exigível?
    * 
    * Se ambos os valores puderem ser chamados, o que eles retornarão?
    * 
 * As respostas a essas perguntas geralmente são coisas que mantemos em nossas cabeças quando escrevemos JavaScript, e temos que esperar que tenhamos acertado todos os detalhes. 
 * 
 * Digamos que message foi definido da seguinte maneira.
*/

//definido uma constante message e atribuindo um valor, uma string
const message = "Hello World!";

/**
 * Como você provavelmente pode imaginar, se tentarmos executar message.toLowerCase(), obteremos a mesma string apenas em letras minúsculas.
 * 
 * E a segunda linha de código? Se você estiver familiarizado com JavaScript, saberá que isso falha com uma exceção:
*/

//TypeError: message is not a function

/**
 * Seria ótimo se pudéssemos evitar erros como esse.
 * 
 * Quando executamos nosso código, a maneira como nosso tempo de execução do JavaScript escolhe o que fazer é descobrindo o tipo de valor - que tipos de comportamentos e recursos ele possui. Isso é parte do que TypeError está aludindo - está dizendo que a string "Hello World!"não pode ser chamada como uma função.
 * 
 * Para alguns valores, como os primitivos string e number, podemos identificar seu tipo em tempo de execução usando o typeof operador. Mas para outras coisas como funções, não há nenhum mecanismo de tempo de execução correspondente para identificar seus tipos. Por exemplo, considere esta função:
*/

function fn(x) {
    return x.flip();
}

/**
 * Podemos observar lendo o código que esta função só funcionará se for dado um objeto com uma flip propriedade callable, mas o JavaScript não apresenta esta informação de forma que possamos verificar enquanto o código está rodando. A única maneira em JavaScript puro de dizer o que fn faz com um determinado valor é chamá-lo e ver o que acontece. Esse tipo de comportamento torna difícil prever o que o código fará antes de ser executado, o que significa que é mais difícil saber o que seu código fará enquanto você o escreve.
 * 
 * Visto desta forma, um tipo é o conceito de descrever quais valores podem ser passados fn​​e quais irão travar. O JavaScript só fornece realmente digitação dinâmica - executando o código para ver o que acontece.
 * 
 * A alternativa é usar um sistema de tipo estático para fazer previsões sobre qual código é esperado antes de ser executado.
*/