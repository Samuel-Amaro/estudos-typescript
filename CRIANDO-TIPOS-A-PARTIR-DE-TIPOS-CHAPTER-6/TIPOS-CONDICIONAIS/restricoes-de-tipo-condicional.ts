/**
 * * RESTRIÇÕES DE TIPO CONDICIONAL
 *  
 * Freqüentemente, as verificações em um tipo condicional nos fornecerão algumas novas informações. Assim como o estreitamento com guardas de tipo pode nos dar um tipo mais específico, a verdadeira ramificação de um tipo condicional restringirá ainda mais os genéricos pelo tipo contra o qual verificamos.
 * 
 * Por exemplo, vamos pegar o seguinte:
*/

//declaramos um tipo Generico, que possui um paramentro de tipo T
type MessageOf<T> = T["message"];

/**
 * Neste exemplo, erros de TypeScript porque T não é conhecido por ter uma propriedade chamada message. Poderíamos restringir T, e o TypeScript não reclamaria mais:
*/

//declaramos um novo tipo generico que define um paramentro de tipo esse paramentro de tipo e restrito a tipos que sejam atribuiveis a um objeto literal anonimo com propriedade message do tipo desconhecido
//o tipo generico so aceitara tipos fornecidos pelo usuario que sejam atribuives ao objeto literal anonimo com propriedade message, essa e uma forma de restringir os tipos aceitos, assim de acordo com o tipo fornecido retorna um tipo correpondente
type MessageOf2<T extends {message: unknown}> = T["message"]; 

//declaramos um tipo de objeto chamado Email
interface Email{
    //propriedades e metodos
    message: string;
}

//declaramos um novo tipo de objeto nomeado, ira retornar o valor contido na propriedade email
type EmailMessageContents = MessageOf2<Email>;

/**
 * No entanto, e se quiséssemos MessageOf pegar qualquer tipo e padronizar algo como never se uma message propriedade não estiver disponível? Podemos fazer isso movendo a restrição e introduzindo um tipo condicional:
*/

//se o paramentro de tipo for atribuivel ao objeto literal anonimo retonamos o valor da propriedade message se não retornamos never
type MessageOf3<T> = T extends {message: unknown} ? T["message"] : never;

//declaramos um tipo de objeto
interface Dog{
    //propriedade e metodo
    bark(): void;
}

//declaramos um novo tipo de objeto
type EmailMessageContents2 = MessageOf3<Email>;

//mesma coisa
type DogMessageContents = MessageOf3<Dog>;

/**
 * Dentro da ramificação verdadeira, o TypeScript sabe que T terá uma message propriedade.
 * 
 * Como outro exemplo, também poderíamos escrever um tipo chamado Flatten que nivela os tipos de array para seus tipos de elemento, mas os deixa sozinhos:
*/

//declara uum novo tipo generico, aceita um paramentro de tipo T, se o paramentro de tipo T for atribuivel a um array que possui elementos de qualquer tipo retornamos um array com o primeira propriedade numerica encontrada
//se não retornamos somente o array
type Flatten<T> = T extends any[] ? T[number] : T;

//declara um tipo nomeado
//Extrai o tipo de elemento.
type Str = Flatten<string[]>;

//Deixa o tipo sozinho.
type Num = Flatten<number>;

/**
 * Quando Flatten é dado um tipo de array, ele usa um acesso indexado com number para buscar o string[] tipo de elemento de. Caso contrário, ele apenas retorna o tipo que foi fornecido.
*/