/**
 * * SOBRECARGA DE FUNCTIONS(OVERLOADS DE FUNCTIONS)
 * 
 * Algumas funções JavaScript podem ser chamadas em uma variedade de contagens e tipos de argumentos. Por exemplo, você pode escrever uma função para produzir um Date que receba um registro de data e hora (um argumento) ou uma especificação de mês/dia/ano (três argumentos).
 * 
 * No TypeScript, podemos especificar uma função que pode ser chamada de diferentes maneiras escrevendo assinaturas de sobrecarga . Para fazer isso, escreva um certo número de assinaturas de função (geralmente duas ou mais), seguidas do corpo da função:
*/

//ESPECIFICANDO UMA FUNCTION QUE PODE SER CHAMADA DE DIFERENTES MANEIRAS ESCREVENDO ASSINATURAS DE SOBRECARGA

//declaramos uma assinatura de function regular que retorna um Date objeto
//que declara um paramentro chamado timestamp do tipo number
//add anotações de tipo de paramentro 
function makeDate(timestamp: number): Date;

//declaramos uma assinatura de sobrecarga de function
//declarando mais dois paramentros do tipo number
function makeDate(m: number, d: number, y: number): Date;

//aqui escrevemos uma implementação de função com uma assinatura compativel
//aqui essa e uma assinatura de implementação, mas essa assinatura não pode ser chamada diretamente, mesmo que tenhamos escrito uma function com dois paramentros opcionais apos o necessario, ela não pode ser chamada com dois paramentros.
//declarando mesmo paramentros mas os ultimos dois como paramentros opcionais do mesmo tipo e implementando o corpo da function
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date{
    //estreitando de igualdade do codigo
    if(d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }else{
        return new Date(mOrTimestamp);
    }
}

//invoca function com somente um parametro, especificando a primeira assinatura
const d1 = makeDate(12345678);
//invoca function com três paramentros especificando a terceira assinatura
const d2 = makeDate(5, 5, 5);
//invoca function com dois argumentos especificando a segunda assinatura de implementação que não pode ser chamada
const d3 = makeDate(1, 3);

/**
 * Neste exemplo, escrevemos duas sobrecargas: uma aceitando um argumento e outra aceitando três argumentos. Essas duas primeiras assinaturas são chamadas de assinaturas de sobrecarga.
 * 
 * Em seguida, escrevemos uma implementação de função com uma assinatura compatível. As funções têm uma assinatura de implementação , mas essa assinatura não pode ser chamada diretamente. Mesmo que tenhamos escrito uma função com dois parâmetros opcionais após o necessário, ela não pode ser chamada com dois parâmetros!
*/