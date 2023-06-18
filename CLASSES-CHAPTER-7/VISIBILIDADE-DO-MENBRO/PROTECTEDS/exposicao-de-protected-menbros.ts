/**
 * * EXPOSIÇÃO DE PROTECTED MENBROS
 * 
 * As classes derivadas precisam seguir seus contratos de classe base, mas podem optar por expor um subtipo de classe base com mais recursos. Isso inclui fazer protected membros public:
*/

//definimos uma class Base
class Base {
    //campos da classe

    //definmos uma propriedade chamada m, com visibilidade protected inicializada com vlaor 10
    //protected membros são visíveis apenas para subclasses da classe em que são declarados.
    protected m = 10;
}

//definimos uma class filha de Base, que herda todas propriedades e metodos de Base
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class Derived extends Base{
    // Sem modificador, então o padrão é 'public'
    //como não repetimos a assinatura do menbro como esta na class pai, estamos substiruindo este menbro, modificando sua visibilidade para publico
    //atribui um novo valor a propriedade m da class Pai, tornando-la public
    m = 15;
}

//declara uma nova instancia de objeto e atribui a d
const d = new Derived();
//acessa valor da propriedade m
console.log(d.m); //OK

/**
 * Observe que Derived já era capaz de ler e escrever livremente m, portanto isso não altera significativamente a “segurança” dessa situação. O principal a observar aqui é que na classe derivada, precisamos ter o cuidado de repetir o protected modificador se essa exposição não for intencional.
*/