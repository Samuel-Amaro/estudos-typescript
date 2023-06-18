/**
 * * PROPRIEDADES OPCIONAIS
 * 
 * Os tipos de objeto também podem especificar que algumas ou todas as suas propriedades são opcionais. Para fazer isso, adicione um ? após o nome da propriedade:
*/

//aquie temos uma function regular
//que tem como paramentro um tipo de objeto
//com propriedade obrigatorias e opcionais
function printName(obj: {first: string, last?: string}) {
    //...
}

//Ambos OK
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});

/**
 * Em JavaScript, se você acessar uma propriedade que não existe, obterá o valor undefined em vez de um erro de tempo de execução. Por causa disso, ao ler uma propriedade opcional, você terá que verificar undefined antes de usá-la.
*/

function printName2(obj: {first: string, last?: string}) {
    //Erro - pode travar se 'obj.last' não for fornecido!
    console.log(obj.last?.toUpperCase());

    if(obj.last !== undefined) {
        //OK
        console.log(obj.last.toUpperCase());
    }

    // Uma alternativa segura usando a sintaxe moderna do JavaScript:
    console.log(obj.last?.toUpperCase());
}