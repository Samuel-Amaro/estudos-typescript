/**
 * * ANY(QUALQUER) 
 * 
 * O TypeScript também tem um tipo especial, any, que você pode usar sempre que não quiser que um determinado valor cause erros de verificação de tipo.
 * 
 * Quando um valor é do tipo any, você pode acessar qualquer propriedade dele (que por sua vez será do tipo any), chamá-lo como uma função, atribuí-lo a (ou de) um valor de qualquer tipo ou praticamente qualquer outra coisa que seja sintaticamente jurídico:
*/

let obj: any = {x: 0};
// Nenhuma das linhas de código a seguir lançará erros de compilador.
// O uso de `any` desabilita todas as outras verificações de tipo e assume-se
// você conhece o ambiente melhor que o TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

/**
 * O any tipo é útil quando você não deseja escrever um tipo longo apenas para convencer o TypeScript de que uma determinada linha de código está correta.
 * 
 * * noImplicitAny
 * 
 * Quando você não especifica um tipo e o TypeScript não pode inferi-lo a partir do contexto, o compilador normalmente assume o padrão any.
 * 
 * Você geralmente deseja evitar isso, porque any não é verificado o tipo. Use o sinalizador do compilador noImplicitAny para sinalizar qualquer implícito any como um erro.
*/