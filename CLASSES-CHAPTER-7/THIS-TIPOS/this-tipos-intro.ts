/**
 * * THIS TIPOS INTRO
 * 
 *  Nas classes, um tipo especial chamado this refere-se dinamicamente ao tipo da classe atual. Vamos ver como isso é útil:
*/

//declaramos uma class
class Box{
    //menbros da class

    //declarmaos uma propriedade da class com visibilidade publica inicializada com uma string valor 
    contents: string = "";

    //declaramos um metodo, que define um páramenmtro chamado value do tipo string
    set(value: string) {
        this.contents = value;
        //o tipo especial this, refere-se dinamicamente ao tipo da classe atual
        return this;
    }
}

/**
 * Aqui, o TypeScript inferiu o tipo de retorno set como sendo this, em vez de Box. Agora vamos fazer uma subclasse de Box:
*/

//declaramos uma class filha que herda tudo de Box
class ClearableBox extends Box{
    //menbros da class filha

    //declaramos um metodo da class filha
    clear() {
        //aqui atribuimos um novo valor na propriedade da class pai
        this.contents = "";
    }
}

//declaramos um nova instancia de objeto e atribuimos a
const a = new ClearableBox();
//acessamos o metodo da class pai,
//este metodo retorna a referencia da class atual
const b = a.set("hello");

/**
 * Você também pode usar this em uma anotação de tipo de parâmetro:
*/

//declaramos uma class
class Box2{
    //menbros da class

    //declarmaos uma propriedade da class com visibilidade publica inicializada com uma string valor 
    content: string = "";

    //declaramos um metodo, que define um páramenmtro chamado other do tipo especial this
    //usamos o tipo this em uma anotação de tipo de parâmetro
    //o tipo especial this, refere-se dinamicamente ao tipo da classe atual
    sameAs(other: this) {
        return other.content === this.content;
    }
}

/**
 * Isso é diferente de escrever other: Box— se você tiver uma classe derivada, seu sameAs método agora aceitará apenas outras instâncias dessa mesma classe derivada:
*/

//declaramos uma class filha, que herda tudo de Box2
class DerivedBox extends Box2{
    //menbros da class filha

    //dedclaramos uma propriedade do tipo string inicializada com um valor
    otherContent: string = "?";
}

//declaramos uma nova instancia da class Base e atribuimos a base
const base = new Box2();

//declaramos uma nova instancia da class filha e atribuimos a derived
const derived = new DerivedBox();

//chamamos o metodo definido na class base por meio da class filha, o metodo aceita como paramentro o tipo da class atual, que no caso tem que ser a filha, mas tem um erro porque estamos passsando a pai
derived.sameAs(base);