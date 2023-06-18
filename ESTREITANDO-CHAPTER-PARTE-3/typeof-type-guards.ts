/**
 * * TYPEOF TYPE GUARDS(TYPEOF TIPOS DE GUARDAS)
 * 
 * Como vimos, o JavaScript oferece suporte a um typeof operador que pode fornecer informações básicas sobre o tipo de valor que temos em tempo de execução. O TypeScript espera que isso retorne um determinado conjunto de strings:
 * 
    * "string"
    * "number"
    * "bigint"
    * "boolean"
    * "symbol"
    * "undefined"
    * "object"
    * "function" 
    * 
 * Como vimos com padLeft, esse operador aparece com bastante frequência em várias bibliotecas JavaScript, e o TypeScript pode entendê-lo para restringir tipos em diferentes ramificações.
 * 
 * No TypeScript, a verificação do valor retornado por typeof é uma proteção de tipo. Como o TypeScript codifica como typeof opera em valores diferentes, ele conhece algumas de suas peculiaridades no JavaScript. Por exemplo, observe que na lista acima, typeof não retorna a string null. Confira o exemplo a seguir:
*/

//declara uma function regular 
//add anotações de tipo de paramentro
//declara uma paramentro chamado strs que define seu tipo como um tipo complexo union que combina um tipo string, um array de string e null, pode ser um dos três. 
function printAll(strs: string | string[] | null) {
    //verifica se o paramentro e do tipo object, um array e do tipo object
    //No TypeScript, a verificação do valor retornado por typeof é uma proteção de tipo.
    if(typeof strs === "object") {
        for(const s of strs) {
            console.log(s);
        }
    //verifica se e do tipo string
    }else if(typeof strs === "string") {
        console.log(strs);
    }else {
        //do nothing
    }
}

/**
 * Na printAll função, tentamos verificar se strs é um objeto para ver se é um tipo de array (agora pode ser um bom momento para reforçar que arrays são tipos de objeto em JavaScript). Mas acontece que em JavaScript, typeof null na verdade é "object"! Este é um daqueles infelizes acidentes da história.
 * 
 * Usuários com experiência suficiente podem não se surpreender, mas nem todo mundo já se deparou com isso em JavaScript; felizmente, o TypeScript nos permite saber que strs foi reduzido apenas em string[] | null vez de apenas string[].
 * 
 * Isso pode ser uma boa transição para o que chamaremos de verificação de “veracidade”.
*/