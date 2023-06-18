/**
 * * NOMES ESTÁTICOS ESPECIAIS
 * 
 *  Geralmente não é seguro/possível substituir as propriedades do Function protótipo. Como as próprias classes são funções que podem ser invocadas com new, certos static nomes não podem ser usados. Propriedades de função como name, length e call não são válidas para definir como static membros:
*/

//definimos uma class
class S{
    //menbros da class

    //definimos uma propriedade estatica da class, so definimos o menbro estatico aqui, mas um menbro estatico não esta associado a uma instancia especifica da classe, mas sim a class
    //podem ser acessados através do próprio objeto construtor da class
    //menbros estaticos também podem usar os mesmos modificadores de visibilidade, como public, private, protected
    static name = "S!";
}