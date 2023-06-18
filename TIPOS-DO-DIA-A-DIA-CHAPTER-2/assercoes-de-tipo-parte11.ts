/**
 * * ASSERÇÕES DE TIPO(type assertions)
 * 
 *  Às vezes, você terá informações sobre o tipo de um valor que o TypeScript não pode conhecer.
 * 
 * Por exemplo, se você estiver usando document.getElementById, o TypeScript sabe apenas que isso retornará algum tipo de HTMLElement, mas você pode saber que sua página sempre terá um HTMLCanvasElement com um determinado ID.
 * 
 * Nessa situação, você pode usar uma declaração de tipo para especificar um tipo mais específico:
*/

//aqui o ts não conhece o tipo do valor retornado, so sabe que retorna um HTMLElement
//usando uma declaração de tipo para especificar um tipo mais especifico sobre qual o programador tem conhecimento e informações sobre o tipo que sera retornado pelo metodo, assim especificamos uma referencia para o tipo de forma mais especifica
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

/**
 * Como uma anotação de tipo, as asserções de tipo são removidas pelo compilador e não afetarão o comportamento de tempo de execução do seu código.
 * 
 * Você também pode usar a sintaxe de colchetes angulares (exceto se o código estiver em um .tsx arquivo), que é equivalente:
*/

const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/**
 * Lembrete: como as asserções de tipo são removidas em tempo de compilação, não há verificação de tempo de execução associada a uma asserção de tipo. Não haverá uma exceção ou null gerada se a asserção de tipo estiver errada.
 * 
 * O TypeScript permite apenas declarações de tipo que convertem em uma versão mais específica ou menos específica de um tipo. Esta regra evita coerções “impossíveis” como:
*/

//erro: por querere causar um coerção de tipo especifica
//const x = "hello" as number;

/**
 * Às vezes, essa regra pode ser muito conservadora e não permitirá coerções mais complexas que possam ser válidas. Se isso acontecer, você pode usar duas asserções, primeiro para any(ou unknown, que apresentaremos mais adiante), depois para o tipo desejado:
*/

//const a = (expr as any) as TemplateStringsArray;
