/**
 * * FALHAS SEM EXCEÇÃO
 * 
 *  Até agora, discutimos certas coisas como erros de tempo de execução - casos em que o tempo de execução do JavaScript nos diz que acha que algo não faz sentido. Esses casos surgem porque a especificação ECMAScript tem instruções explícitas sobre como a linguagem deve se comportar quando se depara com algo inesperado.
 * 
 * Por exemplo, a especificação diz que tentar chamar algo que não pode ser chamado deve gerar um erro. Talvez isso soe como “comportamento óbvio”, mas você pode imaginar que acessar uma propriedade que não existe em um objeto deve gerar um erro também. Em vez disso, o JavaScript nos dá um comportamento diferente e retorna o valor undefined:
*/

const user = {
    name: "Daniel",
    age: 26
};

//acessando uma propriedade que não existe no objeto user
//gera um erro em JS
user.location; //returns undefined em JS

/**
 * Por fim, um sistema de tipo estático precisa fazer a chamada sobre qual código deve ser sinalizado como um erro em seu sistema, mesmo que seja um JavaScript “válido” que não gerará um erro imediatamente. No TypeScript, o código a seguir produz um erro sobre location não estar definido:
*/

//acessando uma propriedade que não existe no objeto user
//no ts precisa fazer a chamada sobre qual codigo deve ser sinalizado como um erro em seu sistema
user.location; //no typescript A propriedade 'location' não existe no tipo '{ name: string; age: number; }'.ts(2339)

/**
 * Embora às vezes isso implique uma troca no que você pode expressar, a intenção é detectar bugs legítimos em nossos programas. E o TypeScript detecta muitos bugs legítimos.
*/

//a intenção do TS(um verificador de tipos estaticos) e detectar bugs legitimos em nossos programas
//E o TS detecta muitos bugs legitimos

//declara uma constante e atribui um valor
const announcement = "Hello World!";

// Com que rapidez você consegue identificar os erros de digitação?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

//Provavelmente pretendíamos escrever isto...
announcement.toLocaleLowerCase();

/**
 * funções não chamadas,
*/

//deteccção de bugs por meio do TS
//um função não chamada
function flipCoin() {
    // Deve ser Math.random()
    return Math.random < 0.5; // -> O operador '<' não pode ser aplicado aos tipos '() => number' e 'number'.ts(2365)
}

/**
 * ou erros básicos de lógica
 *  
*/

const value = Math.random() < 0.5 ? "a" : "b";
if(value !== "a") {
    //...
}else if(value === "b") { // -> Esta comparação parece não ser intencional porque os tipos '"a"' e '"b"' não têm sobreposição.
    // Ops, inacessível
}