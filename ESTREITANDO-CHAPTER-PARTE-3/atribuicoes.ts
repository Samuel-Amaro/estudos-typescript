/**
 * * ATRIBUIÇÕES
 *  
 * Como mencionamos anteriormente, quando atribuímos a qualquer variável, o TypeScript examina o lado direito da atribuição e restringe o lado esquerdo adequadamente.
*/

let x = Math.random() < 0.5 ? 10 : "hello world!";

//atribuimos o valor 1 do tipo number a variavel x
x = 1;

console.log(x);

//atribuimos uma string a variavel
x = "goodbye!";

console.log(x);

/**
 * Observe que cada uma dessas atribuições é válida. Mesmo que o tipo observado tenha x mudado para number após nossa primeira atribuição, ainda conseguimos atribuir a string a x. Isso ocorre porque o tipo declarado de x - o tipo que x começou com - é string | number, e a atribuição é sempre verificada em relação ao tipo declarado.
 * 
 * Se tivéssemos atribuído a booleana x, teríamos visto um erro, pois isso não fazia parte do tipo declarado.
*/

//se declararmos boolean a x gera um erro pois não faz parte do tipo declarado
x = true;