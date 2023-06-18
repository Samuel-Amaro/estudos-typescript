/**
 * * FUNCTION(FUNÇÃO)
 * 
 * O tipo global Function descreve propriedades como bind, call, apply e outras presentes em todos os valores de função em JavaScript. Ele também tem a propriedade especial de que os valores do tipo Function sempre podem ser chamados; estas chamadas retornam any:
*/

//declara uma function regular que declara uma paramentro chamado f, que e do tipo global Function, f e um valor do tipo function
function doSomething(f: Function) {
    //por f ser um valor do tipo function
    //ele pode ser chamado, esta chamada retorna any
    //retorna um tipo qualquer(any)
    return f(1, 2, 3);
}

/**
 * Esta é uma chamada de função sem tipo any e geralmente é melhor evitada por causa do tipo de retorno inseguro .
 * 
 * Se você precisa aceitar uma função arbitrária(aleatoria), mas não pretende chamá-la, o tipo () => void geralmente é mais seguro.
*/