/**
 * * Partial<Type>
 * 
 * Constrói um tipo com todas as propriedades de Type definidas como opcionais. Esse utilitário irá retornar um tipo que representa todos os subconjuntos de um determinado tipo.
 * 
 * Exemplo
*/

//declara um objeto, com um nome
interface Todo {
    titulo: string;
    descricao: string;
}

function atualizarTodo(todo: Todo, camposParaAtualizar: Partial<Todo>) {
    return {...todo, ...camposParaAtualizar};
}

const todo1 = {
    titulo: "organizar a mesa",
    descricao: "limpar bagunça"
};

const todo2 = atualizarTodo(todo1, {
    descricao: "tirar o lixo"
});
