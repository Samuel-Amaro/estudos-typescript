/**
 * * DECLARAÇÕES DE CAMPO SOMENTE TIPO
 *  
 * Quando target >= ES2022 ou useDefineForClassFields for true, os campos de classe serão inicializados após a conclusão do construtor da classe pai, substituindo qualquer valor definido pela classe pai. Isso pode ser um problema quando você deseja apenas declarar novamente um tipo mais preciso para um campo herdado. Para lidar com esses casos, você pode escrever declare para indicar ao TypeScript que não deve haver efeito de tempo de execução para essa declaração de campo.
*/

//declara um tipo de objeto nomeado
interface Animal{
    //propriedadeds
    dateOfBirth: any;
}

//declaramos um tipo de objeto nomeado filho que herda todas propriedades da class Pai Animal, sendo que pode declarar suas proprias prorpriedades
interface Dog extends Animal{
    breed: any;
}

//definimos uma class Base 
class AnimalHouse{
    //campos da classe
    resident: Animal;
    //definimos um metodo construtor para a classe
    //O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    //para criar e iniciar um objeto pela classe precisamos fornecer um paramentro do tipo animal, para instancia um objeto
    constructor(animal: Animal) {
        this.resident = animal;
    }
}

//definimos uma class Filha que herda todas propriedades e metodos da class Pai AnimalHouse
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class DogHouse extends AnimalHouse {
    // Não emite código JavaScript,
   // apenas garante que os tipos estão corretos
   // Quando target >= ES2022 ou useDefineForClassFields for true, os campos de classe serão inicializados após a conclusão do construtor da classe pai, substituindo qualquer valor definido pela classe pai. Isso pode ser um problema quando você deseja apenas declarar novamente um tipo mais preciso para um campo herdado.
   // declare para indicar ao TypeScript que não deve haver efeito de tempo de execução para essa declaração de campo.
   //não precisa ser inicializado pelo construtor
   declare resident: Dog;
   //define construtor da class filha
   constructor(dog: Dog) {
    //Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".
    super(dog);
   }
}
