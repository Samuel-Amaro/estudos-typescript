/**
 * * ANOTAÇÕES DE TIPO EM VARIÁVEIS
 * 
 * Ao declarar uma variável usando const, var, ou let, você pode opcionalmente adicionar uma anotação de tipo para especificar explicitamente o tipo da variável:
*/

//declara uma variavel é
//adicionando uma anotação de tipo para especificar explicitamente o tipo da variável
//atribuindo valor de acordo com o tipo especificado
let myName: string = "Alice";

/**
 * O TypeScript não usa declarações de estilo “tipos à esquerda”, como int x = 0; as anotações de tipo sempre irão depois da coisa que está sendo digitada.
 * 
 * Na maioria dos casos, porém, isso não é necessário. Sempre que possível, o TypeScript tenta inferir automaticamente os tipos em seu código. Por exemplo, o tipo de uma variável é inferido com base no tipo de seu inicializador:
*/

// Nenhuma anotação de tipo necessária -- 'myName' inferido como tipo 'string'
let newMyName = "Alice";

/**
 * Na maioria das vezes, você não precisa aprender explicitamente as regras de inferência. Se você está começando, tente usar menos anotações de tipo do que pensa - você pode se surpreender com o número de anotações necessárias para o TypeScript entender completamente o que está acontecendo.
*/