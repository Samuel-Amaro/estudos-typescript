/**
 * * READONLY(SOMENTE LEITURA)
 * 
 *  Os campos podem ser prefixados com o readonly  modificador. Isso evita atribuições ao campo fora do construtor.
*/

//declara class nomeada
class Greeter{
    //declaração de propriedades publicas não gravaveis
    //o modificador readonly, evita atribuições de valores as propriedades fora do construtor
    //declaramos uma propriedade name do tipo string com modificador readonly inicializada com um valor
    readonly name: string = "world";

    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    //para iniciar um objeto podemos ou não fornecer um paramentro do tipo string para o construtor
    //o paramentro e opcional para iniciar um objeto ou não
    constructor(otherName?: string) {
        if(otherName !== undefined) {
            this.name = otherName;
        }
    }

    //metodo da class
    err() {
        //não podemos gravar novos valores nas propriedades fora do construtor, por causa do modificador readonly
        this.name = "not ok";
    }
}

//declara uma nova instancia de objeto da class Greeter, atribuia a instancia a constante g
const g = new Greeter();
//tenta gravar novo valor na propriedade name,
//mas e uma propriedade do tipo somente leitura
g.name = "also not ok";