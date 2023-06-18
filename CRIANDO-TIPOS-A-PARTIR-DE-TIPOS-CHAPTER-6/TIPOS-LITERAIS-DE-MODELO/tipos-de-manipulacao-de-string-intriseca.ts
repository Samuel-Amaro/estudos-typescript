/**
 * * TIPOS DE MANIPULAÇÃO DE STRING INTRÍSECA
 * 
 *  Para ajudar na manipulação de strings, o TypeScript inclui um conjunto de tipos que podem ser usados ​​na manipulação de strings. Esses tipos vêm integrados ao compilador para desempenho e não podem ser encontrados nos .d.ts arquivos incluídos no TypeScript.
 * 
 * * uppercase<StringType>
 * 
 * Converte cada caractere na string para a versão maiúscula.
*/

//declara um tipo de string
type Greeting2 = "Hello, world";
//conjunto de tipo que ajuda na manipulação de string
//converte cada caractere na string para a versão maiuscula
type ShoutyGreeting = Uppercase<Greeting>
           
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">

/**
 * * Lowercase<StringType>
 * 
 * Converte cada caractere na string para o equivalente em minúsculas.
*/

type QuietGreeting = Lowercase<Greeting>;

type ASCIICacheKey2<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID2 = ASCIICacheKey<"my_app">;

/**
 * * capitalize<StringTypes>
 * 
 * Converte o primeiro caractere da string em um equivalente maiúsculo.
*/

type LowercaseGreeting = "hello, world";

type Greeting3 = Capitalize<LowercaseGreeting>;

/**
 * * Uncapitalize<StringType>
 * 
 *  Converte o primeiro caractere na string em um equivalente em minúsculas.
*/

type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting2 = Uncapitalize<UppercaseGreeting>;
              