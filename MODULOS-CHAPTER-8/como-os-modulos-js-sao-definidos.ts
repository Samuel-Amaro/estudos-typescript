/**
 * * COMO OS MÓDULOS JS SÃO DEFINIDOS
 * 
 *  No TypeScript, assim como no ECMAScript 2015, qualquer arquivo que contenha um nível superior import ou export é considerado um módulo.
 * 
 * Por outro lado, um arquivo sem nenhuma declaração de importação ou exportação de nível superior é tratado como um script cujo conteúdo está disponível no escopo global (e, portanto, também para os módulos).
 * 
 * Os módulos são executados dentro de seu próprio escopo, não no escopo global. Isso significa que variáveis, funções, classes, etc. declaradas em um módulo não são visíveis fora do módulo, a menos que sejam explicitamente exportadas usando um dos formulários de exportação. Por outro lado, para consumir uma variável, função, classe, interface, etc. exportada de um módulo diferente, ela deve ser importada usando um dos formulários de importação.
*/