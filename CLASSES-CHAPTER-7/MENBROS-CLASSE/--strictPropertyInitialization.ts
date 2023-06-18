/**
 * * --strictPropertyInitialization
 * 
 * A strictPropertyInitialization configuração controla se os campos de classe precisam ser inicializados no construtor.
*/

//declaramos uma class nomeada
class BadGreeter{
  //declaração de propriedades publicas gravaveis
  name: string;
}

//declaramos outra class nomeada
class GoodGreeter{
    //declaração de propriedades publicas gravaveis
    name: string;

    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    constructor() {
        //quando criamos um novo objeto por meio dessa classe, inicializamos a propriedade name com um valor
        this.name = "hello";
    }
}

/**
 * Observe que o campo precisa ser inicializado no próprio construtor . O TypeScript não analisa os métodos que você chama do construtor para detectar inicializações, porque uma classe derivada pode substituir esses métodos e falhar ao inicializar os membros.
 * 
 * Se você pretende inicializar definitivamente um campo por meios diferentes do construtor (por exemplo, talvez uma biblioteca externa esteja preenchendo parte de sua classe para você), você pode usar o operador de asserção de atribuição definida , !:
*/

//declara uma class nomeda
class OKGreeter{
    // Não inicializado, mas sem erro
    //usando operador de asserção de atribuição definida !
    name!: string; 
}