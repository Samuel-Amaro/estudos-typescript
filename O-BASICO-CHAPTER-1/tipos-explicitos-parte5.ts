/**
 * * TIPOS EXPLÍCITOS
 * 
 *  Até agora, não dissemos ao TypeScript o que são person ou date são. Vamos editar o código para dizer ao TypeScript que person é um string, e que date deve ser um Date objeto. Também usaremos o toDateString() método em date.
*/

//tipos explicitos
//dizendo ao ts que person e uma string e que date deve ser um Date objeto
//add anotações de tipo e person descrever date com quais tipos de valores greet podem ser chamados.
//podemos ler a assinatura como "greet leva um person tipo string e um date tipo Date"
function greet2(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

/**
 * O que fizemos foi adicionar anotações de tipo e person descrever date com quais tipos de valores greet podem ser chamados. Você pode ler essa assinatura como " greet leva um person tipo string e um date tipo Date".
 * 
 * Com isso, o TypeScript pode nos informar sobre outros casos em que greet podem ter sido chamados incorretamente. Por exemplo…
*/

//chamando a function gree2 incorretamente
//greet2("Maddison", Date());

/**
 * Huh? O TypeScript relatou um erro em nosso segundo argumento, mas por quê?
 * 
 * Talvez surpreendentemente, chamar Date() em JavaScript retorna um arquivo string. Por outro lado, construir um Date with new Date()realmente nos dá o que esperávamos.
 * 
 * De qualquer forma, podemos corrigir rapidamente o erro:
*/

greet2("Maddison", new Date());

/**
 * Lembre-se de que nem sempre precisamos escrever anotações de tipo explícitas. Em muitos casos, o TypeScript pode apenas inferir (ou “descobrir”) os tipos para nós, mesmo se os omitirmos.
*/

//declara variavel e atribui valor, automaticamente o TS pode inferir(descobrir) o tipo da variavel para nos
let msg = "hello there!";

/**
 * Mesmo que não tenhamos dito ao TypeScript que msgtinha o tipo string, ele foi capaz de descobrir isso. Isso é um recurso e é melhor não adicionar anotações quando o sistema de tipos acabar inferindo o mesmo tipo de qualquer maneira.
 * 
 * Observação: o balão de mensagem dentro do exemplo de código anterior é o que seu editor mostraria se você passasse o mouse sobre a palavra.
*/

