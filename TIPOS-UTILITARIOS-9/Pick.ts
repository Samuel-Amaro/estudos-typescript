/**
 * * Pick<Type, Keys>
 * 
 * Constrói um tipo pegando um conjunto de propriedades Keys de Type.
*/

interface Todo {
    titulo: string;
    descricao: string;
    completado: boolean;
}

type TodoPreVisualizacao = Pick<Todo, "titulo" | "completado">;

const todoPick: TodoPreVisualizacao = {
    titulo: "Limpar quarto",
    completado: false,
};

todoPick;