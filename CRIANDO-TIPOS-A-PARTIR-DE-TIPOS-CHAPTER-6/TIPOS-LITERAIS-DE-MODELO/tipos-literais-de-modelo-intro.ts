/**
 * * TIPOS LITERAIS DE MODELO
 *  
 * Os tipos literais de modelo são construídos em tipos literais de cadeia de caracteres e têm a capacidade de se expandir em várias cadeias de caracteres por meio de uniões.
 * 
 * Eles têm a mesma sintaxe das strings literais de modelo em JavaScript , mas são usados ​​em posições de tipo. Quando usado com tipos literais concretos, um literal modelo produz um novo tipo literal de cadeia de caracteres concatenando o conteúdo.
*/

//declara um novo tipo de string literal
type World = "world";

//declara um novo tipo de string literal de modelo
type Greeting = `hello ${World}`;

/**
 * Quando uma união é usada na posição interpolada, o tipo é o conjunto de todas as strings literais possíveis que podem ser representadas por cada membro da união:
*/

//declara um novo tipo de string literal
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

/**
 * Para cada posição interpolada no literal de modelo, as uniões são multiplicadas cruzadas:
*/

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

/**
 * Geralmente, recomendamos que as pessoas usem a geração antecipada para grandes uniões de strings, mas isso é útil em casos menores.
*/