/**
 * * PROTECTED ACESSO ENTRE HIERARQUIAS
 * 
 * Diferentes linguagens OOP discordam sobre se é legal acessar um protected membro por meio de uma referência de classe base:
*/

//definimos um class Base
class Base3{
    //campos da classe

    //definimos uma propriedade da class chamada x do tipo number inicializada com valor 1, definida sua visibilidade como protegida
    //protected membros são visíveis apenas para subclasses da classe em que são declarados.
    protected x: number = 1;
}

//definimos uma class filha que herda tudo da class Base3
//A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class Derived1 extends Base{
    //repetimos o contrato de assinatura do menbro x da class Base aqui na filha para permanecer da mesma forma, so que na class filha agora, com um valor diferente
    protected x: number = 5;
}

class Derived2 extends Base{
    //campos da classe filha

    //define um metodo public da class que aceita como paramentro um objeto do tipo da class Derived2
    f1(other: Derived2) {
        //tenta acessar um menbro do objeto, so que o menbro tem visibilidade protegida, não pode ser acessada fora da class
        other.x = 10;
    }

    //define um metodo public da class que aceita como paramentro um objeto do tipo da class Base
    f2(other: Base) {
        //tenta acessar um menbro do objeto, so que o menbro tem visibilidade protegida, não pode ser acessada fora da class
        other.x = 10;
    }
}

/**
 * Java, por exemplo, considera isso legal. Por outro lado, C# e C++ escolheram que esse código deveria ser ilegal.
 * 
 * TypeScript fica do lado de C# e C++ aqui, porque acessar x em Derived2 só deve ser permitido nas subclasses de Derived2, e Derived1 não é uma delas. Além disso, se acessar x por meio de uma referência Derived1 for ilegal (o que certamente deveria ser!), acessá-lo por meio de uma referência de classe base nunca deve melhorar a situação.
 * 
 * Consulte também Por que não consigo acessar um membro protegido de uma classe derivada? o que explica melhor o raciocínio do C#.
*/