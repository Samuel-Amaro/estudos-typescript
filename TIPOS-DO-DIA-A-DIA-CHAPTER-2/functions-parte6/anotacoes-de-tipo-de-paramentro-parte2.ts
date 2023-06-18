/**
 * * ANOTAÇÕES DE TIPO DE PARÂMETRO
 * 
 * Ao declarar uma função, você pode adicionar anotações de tipo após cada parâmetro para declarar quais tipos de parâmetros a função aceita. As anotações do tipo de parâmetro vão após o nome do parâmetro:
*/

//Anotação tipo paramentro
//declarando uma function regular
//que possui uma paramentro name do tipo string
//add anotações de tipo apos cada paramentro para declarar quais tipos de parâmetros a function aceita, anotações do tipo de paramentro vão apos o nome do paramentro
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

/**
 * Quando um parâmetro tiver uma anotação de tipo, os argumentos dessa função serão verificados:
*/

// Seria um erro de tempo de execução se executado!
greet(42);

/**
 * Mesmo que você não tenha anotações de tipo em seus parâmetros, o TypeScript ainda verificará se você passou o número correto de argumentos. 
*/

