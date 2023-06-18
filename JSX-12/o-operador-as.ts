/**
 * * O OPERADOR AS
 * 
 * Observe como escrever uma declaração de tipo:
*/

var foo = <foo>bar;

/**
 * Isso afirma que a variável bar tem o tipo foo. Uma vez que o TypeScript também usa colchetes angulares para afirmações de tipo, combiná-lo com a sintaxe JSX apresentaria certas dificuldades de análise. Como resultado, o TypeScript não permite afirmações do tipo colchete angular em arquivos .tsx.
 * 
 * Uma vez que a sintaxe acima não pode ser usada em arquivos .tsx, um operador de asserção de tipo alternativo deve ser usado: as. O exemplo pode ser facilmente reescrito com o operador as.
*/

//usando asserção de tipo, declaração de tipo para especificar um tipo mais especifico
var foo2 = bar as foo;

/**
 * O operador as está disponívem em ambos arquivos .ts e .tsx, e é idêntico em comportamento ao estilo de asserção do tipo colchete angular.
*/