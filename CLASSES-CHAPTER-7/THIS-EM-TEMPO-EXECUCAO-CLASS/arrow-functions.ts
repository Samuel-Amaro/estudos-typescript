/**
 * * ARROW FUNCTIONS(FUNCÇÕES DE SETA)
 * 
 *  Se você tiver uma função que frequentemente será chamada de uma forma que perde seu this contexto, pode fazer sentido usar uma propriedade de função de seta em vez de uma definição de método:
*/

//definimos uma class
class MyClass4{
    //menbros da class

    //definimos uma propriedade da class inicializda com um valor, com visibildiade publica
    name = "MyClass";

    //definimos uma propriedadee getName que recebe um function anonima arrow function
    getName = () => {
        return this.name;
    };
}

//declaramos uma nova instancia de objeto
//e atribuimos a c
const c2 = new MyClass4();

//chamamos o metodo da class
const g = c.getName;

//Imprime "MyClass" em vez de travar
console.log(g());

/**
 * Isso tem algumas compensações:
 * 
    * O this valor é garantido como correto em tempo de execução, mesmo para código não verificado com TypeScript
    * 
    * Isso usará mais memória, porque cada instância de classe terá sua própria cópia de cada função definida dessa maneira
    * 
    * Você não pode usar super.getName em uma classe derivada, porque não há entrada na cadeia de protótipo para buscar o método da classe base
*/