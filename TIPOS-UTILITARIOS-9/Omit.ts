/**
 * * Omit<Type, Keys>
 * 
 *  Constrói um tipo pegando todas as propriedades de Type e então removendo Keys.
*/

interface Todo {
    titulo: string;
    descricao: string;
    completado: boolean;
}


type TodoPreVisualizacao2 = Omit<Todo, "descricao">;

const todoOmit: TodoPreVisualizacao = {
    titulo: "Limpar quarto",
    completado: false,
};

todoOmit;