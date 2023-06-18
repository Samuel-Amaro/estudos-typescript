/**
 * * TRABALHANDO COM VALORES RESTRITOS
 * 
 *  Aqui está um erro comum ao trabalhar com restrições genéricas:
*/

//declaramos uma function regular
//que possui um paramentro de tipo generico na assinatura da função, que usamos uma restrição para limitar os tipos de tipos que um paramentro de tipo pode aceitar
//restringimos o paramentro type a esse tipo escrevendo uma extends clausula, o type tem que possui uma propriedade lenght do tipo number
//usando genericos para descrever uma correpondecia entre dois valores, um generico pode corresponder a um tipo mais especifico
//declara dois paramentros, objt: do tipo Type
//minimun do tipo number
//a function regular retorna Type
function minimumLength<Type extends { length: number}>(objt: Type, minimun: number): Type {
    if(objt.length >= minimun) {
        return objt;
    }else{
        //O tipo '{ length: any; }' não pode ser atribuído ao tipo 'Type'.
        //'{ length: any; }' é atribuível à restrição do tipo 'Type', mas é possível criar uma instância de 'Type' com um subtipo diferente de restrição '{ length: number; }'
        //a function deve retorna o mesmo tipo de objeto que foi passado, não apenas algum objeto correspondente a restrição
        return {length: minimum};
    }
}

/**
 * Pode parecer que esta função está OK - Type está restrita a { length: number }, e a função retorna Type ou um valor correspondente a essa restrição. O problema é que a função promete retornar o mesmo tipo de objeto que foi passado, não apenas algum objeto correspondente à restrição. Se esse código fosse legal, você poderia escrever um código que definitivamente não funcionaria:
*/

//'arr' obtem valor {length: 6}
const arr = minimumLength([1, 2, 3], 6);

// e trava aqui porque os arrays têm
// um método 'slice', mas não o objeto retornado!
console.log(arr.slice(0));