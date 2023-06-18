/**
 * * RESTRIÇÕES 
 * 
 * Escrevemos algumas funções genéricas que podem funcionar em qualquer tipo de valor. Às vezes, queremos relacionar dois valores, mas só podemos operar em um determinado subconjunto de valores. Nesse caso, podemos usar uma restrição para limitar os tipos de tipos que um parâmetro de tipo pode aceitar.
 * 
 * Vamos escrever uma função que retorne o maior de dois valores. Para fazer isso, precisamos de uma length propriedade que seja um número. Restringimos o parâmetro de tipo a esse tipo escrevendo uma extends cláusula:
*/

//declaramos uma function regular
//que possui um paramentro de tipo generico na assinatura da função, que usamos uma restrição para limitar os tipos de tipos que um paramentro de tipo pode aceitar
//restringimos o paramentro type a esse tipo escrevendo uma extends clausula, o type tem que possui uma propriedade lenght do tipo number
//usando genericos para descrever uma correpondecia entre dois valores, um generico pode corresponder a um tipo mais especifico
//declara dois paramentros do tipo generico Type
function longest<Type extends {length: number}>(a: Type, b: Type){
    if(a.length >= b.length) {
        return a;
    }else{
        return b;
    }
}

//longerArray e do tipo 'number[]
const longerArray = longest([1, 2], [1, 2, 3]);
//longerString e do tipo string literal 'alice' | 'bob' 
const longerString = longest("alice", "bob");
//Error! Numbers não tem uma propriedade 'lenght'
const notOK = longest(10, 100);

/**
 * Há algumas coisas interessantes a serem observadas neste exemplo. Permitimos que o TypeScript inferisse o tipo de retorno de longest. A inferência de tipo de retorno também funciona em funções genéricas.
 * 
 * Como restringimos Type a { length: number }, fomos autorizados a acessar a .length propriedade dos parâmetros a e . b Sem a restrição de tipo, não poderíamos acessar essas propriedades porque os valores poderiam ser de algum outro tipo sem uma propriedade de comprimento.
 * 
 * Os tipos de longer Array e longerString foram inferidos com base nos argumentos. Lembre-se, os genéricos tratam de relacionar dois ou mais valores com o mesmo tipo!
 * 
 * Por fim, como gostaríamos, a chamada para longest(10, 100) é rejeitada porque o number tipo não possui uma .length propriedade.
*/
