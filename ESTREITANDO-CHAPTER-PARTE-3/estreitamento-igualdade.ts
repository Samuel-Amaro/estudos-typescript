/**
 * * ESTREITAMENTO DE IGUALDADE
 * 
 *  O TypeScript também usa switch instruções e verificações de igualdade como ===, !==, == e != para restringir tipos. Por exemplo:
*/

//declara uma function regular
//add anotação de tipo de paramentro, nos paramentros x e y
//os paramentros são uma combinação de tipos podendo correponder a um dos tipos especificados no union type
function example(x: string | number, y: string | boolean) {
    //estreitamento de igualdade
    //verifica se x e estritamento igual a y, sejam iguais e do mesmo tipo
    if(x === y) {
        // Agora podemos chamar qualquer método 'string' em 'x' ou 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }else{
        console.log(x);
        console.log(y);
    }
}

/**
 * Quando verificamos que x e y são iguais no exemplo acima, o TypeScript sabia que seus tipos também tinham que ser iguais. Como string é o único tipo comum que ambos podem assumir, o TypeScript sabe disso xe deve ser um na primeira ramificação. y x y string
 * 
 * A verificação de valores literais específicos (em oposição a variáveis) também funciona. Em nossa seção sobre restrição de veracidade, escrevemos uma printAll função que era propensa a erros porque acidentalmente não manipulava strings vazias corretamente. Em vez disso, poderíamos ter feito uma verificação específica para bloquear nulls, e o TypeScript ainda remove corretamente nullo tipo de strs.
*/

//declara uma function regular 
//add anotações de tipo de paramentro
//declara uma paramentro chamado strs que define seu tipo como um tipo complexo union que combina um tipo string, um array de string e null, pode ser um dos três. 
function printAll(strs: string | string[] | null) {
    //verifica se o paramentro e diferente de null
    //usando estreitamento de igualdade
    //verifica se strs e diferente no valor e no tipo de null
    if(strs !== null) {
        //verifica se o paramentro e do tipo object, um array e do tipo object
        //No TypeScript, a verificação do valor retornado por typeof é uma proteção de tipo.
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s);
            }
        //verifica se e do tipo string
        }else if(typeof strs === "string") {
            console.log(strs);
        }
    }   
}

/**
 * A igualdade mais flexível do JavaScript verifica == e != também é estreitada corretamente. Se você não estiver familiarizado, verificar se algo == null realmente não apenas verifica se é especificamente o valor null- também verifica se é potencialmente undefined. O mesmo se aplica a == undefined: verifica se um valor é null ou undefined.
*/

//declara uma forma e tipo do objeto
interface Container {
    //cria uma propriedade, que tem como seu tipo uma combinação de tipos por meio do union,  formado por dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos
    value: number | null | undefined;
}

//declara uma function regular
//add anotações de paramentros, param container e do tipo do objeto container, factor e do tipo number
function multiplyValue(container: Container, factor: number) {
    //Remova 'nulo' e 'indefinido' do tipo.
    //se propriedade value for diferente de null e undefined
    if(container.value != null) {
        console.log(container.value);

        // Agora podemos multiplicar com segurança 'container.value'.
        container.value *= factor;
    }
}