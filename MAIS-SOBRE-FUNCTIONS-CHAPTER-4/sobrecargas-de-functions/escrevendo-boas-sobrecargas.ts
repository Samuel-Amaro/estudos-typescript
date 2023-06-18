/**
 * * ESCREVENDO BOAS SOBRECARGAS
 * 
 *  Assim como os genéricos, existem algumas diretrizes que você deve seguir ao usar sobrecargas de função. Seguir esses princípios tornará sua função mais fácil de chamar, entender e implementar.
 * 
 * Vamos considerar uma função que retorna o comprimento de uma string ou array:
*/

//declara uma assinatura de sobrecarga uma function regular
//que define s como paramentro do tipo string e retorna um number
//add anotações de tipo de paramentro
function len(s: string): number;

//declara uma assintura de sobrecarga de function mudando o nome do paramentro e seu tipo
function len(arr: any[]): number;

//declara uma assinatura de implementação de function que não pode ser chamada diretamente
//aqui implementamos o corpo da function
function len(x: any) {
    return x.length;
}

/**
 * Esta função está bem; podemos invocá-lo com strings ou arrays. No entanto, não podemos invocá-lo com um valor que pode ser uma string ou uma array, porque o TypeScript só pode resolver uma chamada de função para uma única sobrecarga:
*/

len(""); //OK, chama function com string
len([0]); //OK. chama function com array
//erro não pode chamar function com uma valor string ou array
//nenhuma sobrecarga de function corresponde a essa chamada, porque não consegue resolver para uma sobrecarga, aqui temos uma chamada com string ou array dependendo da condição
len(Math.random() > 0.5 ? "hello" : [0]);

/**
 * Como ambas as sobrecargas têm a mesma contagem de argumentos e o mesmo tipo de retorno, podemos escrever uma versão não sobrecarregada da função:
*/

//escrvemos uma versão da function não sobrecarregada
//definindo um paramentro de union que corresponde ao tipo um array de any elementos ou uma string
//pode corresponder a um dos dois
//aqui usamos paramentros de tipo union ao inves de sobrecargas
function len(x: any[] | string) {
    return x.length;
}

/**
 * Isto é muito melhor! Os chamadores podem invocar isso com qualquer tipo de valor e, como um bônus adicional, não precisamos descobrir uma assinatura de implementação correta.
 * 
 * Sempre prefira parâmetros com tipos de união em vez de sobrecargas quando possível
*/