/**
 * * VERIFICAÇÃO DE TIPO ESTÁTICO
 * 
 *  Pense no que TypeError obtivemos anteriormente ao tentar chamar a string como uma função. A maioria das pessoas não gosta de receber nenhum tipo de erro ao executar seu código - esses são considerados bugs! E quando escrevemos um novo código, fazemos o possível para evitar a introdução de novos bugs.
 * 
 * Se adicionarmos apenas um pouco de código, salvarmos nosso arquivo, executarmos novamente o código e vermos imediatamente o erro, poderemos isolar o problema rapidamente; mas nem sempre é assim. Talvez não tenhamos testado o recurso completamente o suficiente, portanto, talvez nunca nos deparemos com um possível erro que seria lançado! Ou, se tivéssemos a sorte de testemunhar o erro, poderíamos ter feito grandes refatorações e adicionado muitos códigos diferentes nos quais somos forçados a vasculhar.
 * 
 * Idealmente, poderíamos ter uma ferramenta que nos ajudasse a encontrar esses bugs antes que nosso código fosse executado. Isso é o que um verificador de tipo estático como o TypeScript faz. Sistemas de tipos estáticos descrevem as formas e comportamentos de quais serão nossos valores quando executarmos nossos programas. Um verificador de tipos como o TypeScript usa essas informações e nos diz quando as coisas podem estar saindo dos trilhos.
*/

//declara uma constante e atribui um valor
//const message = "hello";

//tentar chamar message como uma function
//message(); // -> Essa expressão não pode ser chamada. O tipo 'String' não tem assinaturas de chamada.ts(2349)

/**
 * A execução dessa última amostra com TypeScript nos dará uma mensagem de erro antes de executarmos o código em primeiro lugar.
*/