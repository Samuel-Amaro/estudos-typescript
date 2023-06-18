/**
 * * EXPRESSÕES DE CLASSE
 * 
 * As expressões de classe são muito semelhantes às declarações de classe. A única diferença real é que as expressões de classe não precisam de um nome, embora possamos nos referir a elas por meio de qualquer identificador ao qual elas foram vinculadas:
*/

//expressão de class, define uma class e atribui a uma constante com identificador
//definimos uma class generica, com paramento de tipo Type
const someClass = class<Type> {
    //menbros da class

    //propriedade da class do tipo do paramentro de tipo Type
    content: Type;

    //definimos o metodo especial de construtor, que criar e inicializada um objeto
    //para criar um objeto precisa de um value paramentro do tipo do paramentro de tipo definido
    constructor(value: Type) {
        this.content = value;
    }
};

//criamos uma instancia da class e atribuimos a m
const m = new someClass("Hello, world");