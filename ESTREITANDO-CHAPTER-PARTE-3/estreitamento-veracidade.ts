/**
 * * TRUTHINESS NARROWING(ESTREITAMENTO DA VERACIDADE)
 * 
 * Veracidade pode não ser uma palavra que você encontrará no dicionário, mas é algo que você ouvirá em JavaScript.
 * 
 * Em JavaScript, podemos usar qualquer expressão em condicionais, && s, || s, if declarações, negações booleanas (!) e muito mais. Por exemplo, if as instruções não esperam que sua condição sempre tenha o tipo boolean.
*/

//declara uma function regular
//add anotações de tipo de paramentros
function getUsersOnlineMessage(numUsersOnline: number) {
    //as if instruções não esperam que sua condição sempre tenha o tipo boolean
    if(numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

/**
 * Em JavaScript, as construções como if primeiro “coagem” suas condições a booleans para entendê-las e, em seguida, escolhem suas ramificações, dependendo se o resultado é true ou false. Valores como
 * 
    * 0
    * NaN
    * "" (a string vazia)
    * 0n (a bigint versão do zero)
    * null
    * undefined
 *
 *  todos são coagidos a false, e outros valores são coagidos true. Você sempre pode coagir valores para booleans executando-os por meio da Boolean função ou usando a negação booleana dupla mais curta. (O último tem a vantagem de o TypeScript inferir um tipo booleano literal estreito true, enquanto infere o primeiro como type boolean.)
 * 
*/

// ambos resultam em 'true'
//coagindo um valor do tipo string para boolean valor
Boolean('heelo'); //type: boolean, value: true
//usando a negação booleano dupla mais curta
!!"world"; //type: true, value: true

/**
 * É bastante comum aproveitar esse comportamento, especialmente para proteção contra valores como null ou undefined. Como exemplo, vamos tentar usá-lo para nossa printAll função.
*/

//declara uma function regular 
//add anotações de tipo de paramentro
//declara uma paramentro chamado strs que define seu tipo como um tipo complexo union que combina um tipo string, um array de string e null, pode ser um dos três. 
function printAll(strs: string | string[] | null) {
    //usando o estreitamento da veracidade
    //verificamos se o tipo strs possui um valor que coage para um booleano do valor true e se o typo do objeto e object um array e do tipo object
    if(strs && typeof strs === "object") {
        for(const s of strs) {
            console.log(s);
        }
    }else if(typeof strs === "string") {
        console.log(strs);
    }
}

/**
 * Você notará que nos livramos do erro acima verificando se strs é verdadeiro. Isso pelo menos nos impede de erros temidos quando executamos nosso código como:
*/

//TypeError: null is not iterable

/**
 * Tenha em mente, porém, que a verificação de veracidade em primitivos pode muitas vezes ser propensa a erros. Como exemplo, considere uma tentativa diferente de escrever printAll 
*/

//declara function regular e add anotações de tipo de paramentro
function printAll2(strs: string | string[] | null) {
    //!!!!!!!!!!!!!!!
    //NÃO FAÇA ISSO!
    //CONTINUE LENDO
    //!!!!!!!!!!!!!!!
    //veficia se um valor de strs pode ser coagido para booleano no valor true
    if(strs) {
        //verfica se strs e do tipo objetc
        //um array em js e do tipo objects
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s);
            }
        //se for do tipo string
        }else if(typeof strs === "string") {
            console.log(strs);
        }
    }
}

/**
 * Envolvemos todo o corpo da função em uma verificação de verdade, mas isso tem uma desvantagem sutil: podemos não estar mais lidando com o caso de string vazia corretamente.
 * 
 * O TypeScript não nos prejudica aqui, mas vale a pena observar esse comportamento se você estiver menos familiarizado com o JavaScript. O TypeScript geralmente pode ajudá-lo a detectar bugs no início, mas se você optar por não fazer nada com um valor, há muito o que pode fazer sem ser excessivamente prescritivo. Se você quiser, pode certificar-se de lidar com situações como essas com um linter.
 * 
 * Uma última palavra sobre o estreitamento pela veracidade é que as negações booleanas são !filtradas dos ramos negados.
*/

//declara uma function regular que add anotações de paramentro de tipo
function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
    //se values tiver um valor que pode ser coagido para booleano false que usando negacação sera true
    if(!values) {
        return values;
    }else{
        return values.map((x) => x * factor);
    }
}