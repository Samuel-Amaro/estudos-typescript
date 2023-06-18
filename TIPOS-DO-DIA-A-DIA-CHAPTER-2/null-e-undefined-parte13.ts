/**
 * * NULL É UNDEFINED
 * 
 *  JavaScript tem dois valores primitivos usados ​​para sinalizar valor ausente ou não inicializado: null e undefined.
 * 
 * TypeScript tem dois tipos correspondentes com os mesmos nomes. Como esses tipos se comportam depende se você tem a strictNullChecks opção ativada.
 * 
 * * strictNullChecks desligado
 * 
 * Com off , valores que podem ser ou ainda podem ser acessados ​​normalmente, e os valores e podem ser atribuídos a uma propriedade de qualquer tipo. Isso é semelhante ao comportamento de linguagens sem verificações nulas (por exemplo, C#, Java). A falta de verificação desses valores tende a ser uma das principais fontes de bugs; sempre recomendamos que as pessoas ativem se for prático fazê-lo em sua base de código. strictNullChecks null undefined null undefined strictNullChecks
 * 
 * * strictNullChecks sobre
 * 
 * Com on , quando um valor é ou , você precisará testar esses valores antes de usar métodos ou propriedades nesse valor. Assim como verificar antes de usar uma propriedade opcional, podemos usar o estreitamento para verificar valores que podem ser :strictNullChecks null undefined undefined null
*/

//aqui declaramos uma function que possui um paramentro
//add declarações de tipo de paramentro para especificar o tipo de valor do paramentro
//usamos o union para combinar o tipo string e null podendo ser um dos dois
function doSomething(x: string | null) {
    //usamos o estreitamento para verificar valores que podem ser :strickNullChecks
    if(x === null) {
        //do nothing
    }else{
        console.log("Hello, " + x.toUpperCase());
    }
}

/**
 * * OPERADOR DE ASSERÇÃO NÃO NULO(Non-null Assertion Operator) (POSTFIX !)
 * 
 *  O TypeScript também possui uma sintaxe especial para remover null e undefined de um tipo sem fazer nenhuma verificação explícita. Escrever ! após qualquer expressão é efetivamente uma afirmação de tipo de que o valor não é null ou undefined:
*/

//paramentro x e uma paramentro opcional que pode ser do tipo number ou null
function liveDangerously(x?: number | null) {
    //No error
    //usa o operador postfix para fazer uma afirmação de tipo que o valor não e null ou undefind
    console.log(x!.toFixed());
}

/**
 * Assim como outras asserções de tipo, isso não altera o comportamento do tempo de execução do seu código, por isso é importante usar apenas ! quando você sabe que o valor não pode ser null ou undefined.
*/