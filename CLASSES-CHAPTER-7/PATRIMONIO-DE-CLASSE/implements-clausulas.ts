/**
 * * IMPLEMENTS CLÁUSULAS
 * 
 *  Você pode usar uma implements cláusula para verificar se uma classe atende a um determinado interface. Um erro será emitido se uma classe não conseguir implementá-lo corretamente:
*/

//declaramos um tipo de objeto nomeado
interface Pingable{
    //propriedades
    //declaramos um metodo que não retorna nada
    ping(): void;
}

//declaramos uma class que implementa uma interface chamada Pingable
//usando a implements clausula para verificar se uma classe atende a um determinado interface
class Sonar implements Pingable{
    //implementa o metodo
    ping() {
        console.log("ping!");
    }
}

//declaramos uma class que implementa uma interface chamada Pingable
//usando a implements clausula para verificar se uma classe atende a um determinado interface
//aqui temos um exemplo de que a class não implementa corretamente a interface
class Ball implements Pingable{
    //metodo especializado da class Ball
    pong() {
        console.log("pong!");
    }
}

/**
 * As classes também podem implementar várias interfaces, por exemplo, class C implements A, B {.
 * 
 * * Cuidados
 * 
 * É importante entender que uma implements cláusula é apenas uma verificação de que a classe pode ser tratada como o tipo de interface. Não altera o tipo da classe ou seus métodos . Uma fonte comum de erro é assumir que uma implements cláusula mudará o tipo de classe - isso não acontece!
*/

//declaramos um tipo de objeto nomeado
interface Checkable{
    //propriedades
    //declaramos um metodo que aceita um paramentro do tipo string, e retorna um boolean
    check(name: string): boolean;
}

//declaramos uma class que implementa uma interface chamada Checkable
//usando a implements clausula para verificar se uma classe atende a um determinado interface
//É importante entender que uma implements cláusula é apenas uma verificação de que a classe pode ser tratada como o tipo de interface.
class NameChecker implements Checkable{
    //implementa o metodo check
    check(s) {
        //Noticia de não erro aqui
        return s.toLowerCase() === "ok";
    }
}

/**
 * Neste exemplo, talvez esperássemos que s o tipo de fosse influenciado pelo name: string parâmetro de check. Não é - implements as cláusulas não mudam como o corpo da classe é verificado ou seu tipo inferido.
 * 
 * Da mesma forma, implementar uma interface com uma propriedade opcional não cria essa propriedade:
*/

//declaramos um tipo de objeto nomeado
interface A{
    //declaração de propriedades
    x: number;
    y?: number;
}

//declaramos uma class que implementa uma interface chamada A
//usando a implements clausula para verificar se uma classe atende a um determinado interface, a class tem que ser do mesmo tipo da interface que ela implementa
//É importante entender que uma implements cláusula é apenas uma verificação de que a classe pode ser tratada como o tipo de interface.
class C implements A{
    //implementados a propriedade x
    x = 0;
    //a propriedade opcional y, não e implementa pois e opcional, não e criada aqui na class
}

//declaranado uma instancia de objeto e atribuido a c
const c = new C();
c.y = 10;
