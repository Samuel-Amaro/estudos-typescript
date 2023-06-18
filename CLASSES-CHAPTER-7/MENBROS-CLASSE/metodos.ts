/**
 * * MÉTODOS
 * 
 * Uma propriedade de função em uma classe é chamada de método. Métodos podem usar todas as mesmas anotações de tipo como funções e construtores:
*/

//declaramos uma class
class Point5{
    //campos da class
    //declaramos proprieades da class, inicializados com valores
    x = 10;
    y = 10;

    //declaramos um metodo da class
    //esse metodo declara um paramentro de tipo number, e retorna nada
    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    } 
}

/**
 * Além das anotações de tipo padrão, o TypeScript não adiciona nada de novo aos métodos.
 * 
 * Observe que dentro de um corpo de método, ainda é obrigatório acessar campos e outros métodos via this.. Um nome não qualificado em um corpo de método sempre se referirá a algo no escopo envolvente:
*/

//declaramos uma variavel de escopo de bloco chamada x do tipo number inicializada com valor 0
lex x: number = 0;

//declaramos uma class 
class C {
    //declara campos
    //declaramos propriedades da class, uma chamaa x do tipo string inicializada com um vlaor
    x: string = "hello";

    m() {
        // Isso está tentando modificar 'x' da linha 1, não a propriedade da classe
        x = "world";
    }
}