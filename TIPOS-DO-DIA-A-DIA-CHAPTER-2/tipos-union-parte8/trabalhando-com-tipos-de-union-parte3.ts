/**
 * * TRABALHANDO COM TIPOS DE UNION
 * 
 * É fácil fornecer um valor correspondente a um tipo de união - basta fornecer um tipo correspondente a qualquer um dos membros da união. Se você tem um valor de um tipo de união, como você trabalha com ele?
 * 
 * O TypeScript só permitirá uma operação se ela for válida para todos os membros da união. Por exemplo, se você tiver union string | number, não poderá usar métodos disponíveis apenas em string:
*/

//o typescript  permite que você crie novos tipos a partir dos existentes usando uma grande variedade de operadores
//primeira maneira de combinar tipos e o union type(tipo união)
//e um tipo formado por dois ou mais outros tipos, representado valores que podem ser qualquer um desses tipos
//add anotações de tipo de paramentro apos cada paramentro para declarar quais tipos de paramentro a function aceita
//O TypeScript só permitirá uma operação se ela for válida para todos os membros da união.
//por exemplo, se você tiver union string | number, não poderá usar métodos disponíveis apenas em string:
function printId(id: number | string) {
    console.log(id.toUpperCase());
}

/**
 * A solução é estreitar a união com o código, da mesma forma que você faria em JavaScript sem anotações de tipo. O estreitamento ocorre quando o TypeScript pode deduzir um tipo mais específico para um valor com base na estrutura do código.
 * 
 * Por exemplo, o TypeScript sabe que apenas um string valor terá um typeof valor "string":
*/

function printId2(id: number | string) {
    //O estreitamento ocorre quando o TypeScript pode deduzir um tipo mais específico para um valor com base na estrutura do código.
    if(typeof id === "string") {
        //Nesta ramificação, id é do tipo 'string'
        console.log(id.toUpperCase());
    }else{
        //Aqui, id e do tipo number
        console.log(id);
    }
}

/**
 * Outro exemplo é usar uma função como Array.isArray:
*/

//add anotações de tipo do paramentro
//para combinar tipos existente para forma um novo tipo usando o union type
//aqui temos um union de array de string ou string
function welcomePeople(x: string[] | string) {
    //O estreitamento ocorre quando o TypeScript pode deduzir um tipo mais específico para um valor com base na estrutura do código.
    if(Array.isArray(x)) {
        //Aqui: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }else{
        //Aqui: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

/**
 * Observe que no else ramo, não precisamos fazer nada de especial - se x não era um string[], então deve ter sido um string. 
 * 
 * Às vezes você terá uma união onde todos os membros têm algo em comum. Por exemplo, arrays e strings possuem um slicemétodo. Se todos os membros de uma união tiverem uma propriedade em comum, você poderá usar essa propriedade sem restrição:
*/

// O tipo de retorno é inferido como number[] | string
function getFirstThree(x: number[] | string) {
    //slice metodo comun entre os dois tipos informados no union type
    return x.slice(0, 3);
}

/**
 * Pode ser confuso que uma união de tipos pareça ter a interseção das propriedades desses tipos. Isso não é um acidente - o nome união vem da teoria dos tipos. A união number | string é composta tomando a união dos valores de cada tipo. Observe que dados dois conjuntos com fatos correspondentes sobre cada conjunto, apenas a interseção desses fatos se aplica à união dos próprios conjuntos. Por exemplo, se tivéssemos uma sala com pessoas altas usando chapéus e outra sala com falantes de espanhol usando chapéus, depois de combinar essas salas, a única coisa que sabemos sobre todas as pessoas é que elas devem estar usando um chapéu.
*/