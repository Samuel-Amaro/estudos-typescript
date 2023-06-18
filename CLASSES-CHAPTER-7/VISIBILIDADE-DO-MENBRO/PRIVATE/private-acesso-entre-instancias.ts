/**
 * * PRIVATE ACESSO ENTRE INSTÂNCIAS
 * 
 *  Diferentes linguagens OOP discordam sobre se instâncias diferentes da mesma classe podem acessar os private membros umas das outras. Embora linguagens como Java, C#, C++, Swift e PHP permitam isso, Ruby não.
 * 
 * O TypeScript permite private acesso entre instâncias:
*/

//definimos uma class
class A {
    //campos da classe

    //definimos uma propriedade chamada x inicilizada com valor 10, com visibilidade private
    //private é como protected, mas não permite acesso ao membro mesmo de subclasses:
    private x = 10;

    //define um metodo com visibilidade publica da class com um paramentro chamado other que sera uma instancia de objeto da propria class A
    public sameAs(other: A) {
        //o typescript permite que diferentes instancias da mesma classe acessam as propriedades privadas uma das outras
        //Sem error
        return other.x === this.x;
    }
}

