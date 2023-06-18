/**
 * * INFERENCIA LITERAL
 * 
 *  Quando você inicializa uma variável com um objeto, o TypeScript assume que as propriedades desse objeto podem alterar os valores posteriormente. Por exemplo, se você escreveu um código como este:
*/

const obj = {counter: 0};
if(someCondition) {
    obj.counter = 1;
}

/**
 * O TypeScript não assume que a atribuição de 1 a um campo que anteriormente tinha 0 é um erro. Outra maneira de dizer isso é que obj.counter deve ter o tipo number, não 0, porque os tipos são usados ​​para determinar o comportamento de leitura e escrita .
 * 
 * O mesmo se aplica a strings:
*/

const req = {url: "https://example.com", method: "GET"};
handleRequest(req.url, req.method);

/**
 * No exemplo acima req.method é inferido ser string, não "GET". Como o código pode ser avaliado entre a criação req e a chamada de handleRequest qual poderia atribuir uma nova string como "GUESS" a req.method, o TypeScript considera que esse código tem um erro.
 * 
 * Existem duas maneiras de contornar isso.
 * 
    * Você pode alterar a inferência adicionando uma declaração de tipo em qualquer local:  
*/

//Mudança 1
const req2 = {url: "https://example.com", method: "GET" as "GET"};
//Mudança 2
handleRequest(req.url, req.method as "GET");

/**
 * A alteração 1 significa “pretendo req.method ter sempre o tipo literal "GET" ”, impedindo a possível atribuição de "GUESS" a esse campo posteriormente. A alteração 2 significa “sei por outras razões que req.method tem valor "GET"”.
 * 
    * Você pode usar as const para converter todo o objeto em literais de tipo: 
*/

const req3 = {url: "https://example.com", method: "GET"} as const;
handleRequest(req.url, req.method);

/**
 * O as const sufixo age como const mas para o sistema de tipos, garantindo que todas as propriedades sejam atribuídas ao tipo literal em vez de uma versão mais geral como string ou number.
*/