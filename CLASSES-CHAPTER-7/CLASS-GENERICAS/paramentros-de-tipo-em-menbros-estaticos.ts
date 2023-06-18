/**
 * * PARÂMENTROS DE TIPO EM MENBROS ESTÁTICOS
 * 
 *  Este código não é legal e pode não ser óbvio o porquê:
*/

//define um class generica, com paramentros de tipo chamado Type
class Box2<Type>{
    //menbros da class

    //define propriedade estatica com visibilidade publica, do tipo fornecido no paramentro de tipo
    //Os membros estáticos de uma classe genérica nunca podem se referir aos parâmetros de tipo da classe.
    //pois uma mudança afeta a class e não ha instancia
    static defaultValue: Type;
}

/**
 * Lembre-se de que os tipos são sempre totalmente apagados! No tempo de execução, há apenas um slot de propriedade Box.defaultValue. Isso significa que definir Box<string>.defaultValue (se isso fosse possível) também alteraria Box<number>.defaultValue - não é bom. Os membros estáticos de uma classe genérica nunca podem se referir aos parâmetros de tipo da classe.
*/