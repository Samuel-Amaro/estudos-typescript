/**
 * * Readonly<Type>
 * 
 *  Constrói um tipo com todas as propriedades de Type definidas como readonly, significando que as propriedades do tipo construído não podem ser reatribuídas.
*/

interface Todo {
    titulo: string;
};

const todo: Readonly<Todo> = {
    titulo: "Deleta usuários inativos"
};

todo.titulo = "Olá";

/**
 * Esse utilitário é útil para representar expressões de atribuição que irão falhar em tempo de execução (Ex. Ao tentar reatribuir propriedades de um objeto congelado).
 * 
 * Object.freeze
*/

function freeze<Type>(obj: Type): Readonly<Type>;