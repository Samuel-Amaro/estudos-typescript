/**
 * * THIS EM TEMPO DE EXECUÇÃO EM CLASSES
 * 
 * É importante lembrar que o TypeScript não altera o comportamento do tempo de execução do JavaScript e que o JavaScript é famoso por ter alguns comportamentos peculiares do tempo de execução.
 * 
 * A manipulação de JavaScript this é realmente incomum:
*/

//definimos uma class
class MyClass3{
    //menbros da class

    //definimos uma propriedade da class com visibilidade publica, inicializada com o valor
    name = "MyClass";

    //definimos um metodo da class
    getName() {
        return this.name;
    }
}

//declaramos uma nova instancia de objeto
//e atribuimos a c
const c = new MyClass3();

//declaramos um objeto anonimo com propriedade iguais as definidas em MyClasss3, atribuimos a obj
const obj = {
    name: "obj",
    getName: c.getName
}

//Imprime "obj", não "MyClass"
console.log(obj.getName());

/**
 * Para encurtar a história, por padrão, o valor de this dentro de uma função depende de como a função foi chamada . Neste exemplo, como a função foi chamada por meio da obj referência, seu valor this era obj em vez da instância da classe.
 * 
 * Isso raramente é o que você quer que aconteça! O TypeScript fornece algumas maneiras de mitigar ou evitar esse tipo de erro.
*/