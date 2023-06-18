/**
 * * O IN ESTREITAMENTO DO OPERADOR(The in operator narrowing)
 * 
 * JavaScript tem um operador para determinar se um objeto tem uma propriedade com um nome: o in operador. O TypeScript leva isso em consideração como uma forma de restringir os tipos em potencial.
 * 
 * Por exemplo, com o código: "value" in x. onde "value"é uma string literal e x é um tipo de união. A ramificação “true” restringe x os tipos que possuem uma propriedade opcional ou obrigatória value, e a ramificação “false” restringe os tipos que possuem uma propriedade opcional ou ausente value.
*/

//Um alias de tipo é exatamente isso - um nome para qualquer tipo 
//declaramos um objeto e add uma alias de tipo
type Fish = {swim: () => void };
type Bird = {fly: () => void };

//declara uma function regular
//add anotações de tipo de paramentro
function move(animal: Fish | Bird) {
    //o operador in e para determinar se um objeto tem uma propriedade com um nome
    //verifica se no paramentro animal possui uma propriedade chamada "swin"
    if("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}

/**
 * Para reiterar, propriedades opcionais existirão em ambos os lados para estreitamento, por exemplo, um humano pode nadar e voar (com o equipamento certo) e, portanto, deve aparecer em ambos os lados da in verificação:
*/

//declaramos um objeto anonimo e add uma alias de tipo, um nome para o tipo
type Human = { swim?: () => void; fly?: () => void };

//declara uma functio regular
//add anotações de paramentro de tipo
function move2(animal: Fish | Bird | Human) {
    //o operador in e para determinar se um objeto tem uma propriedade com um nome
    //verifica se no paramentro animal possui uma propriedade chamada "swin"
    if("swim" in animal) {
        animal;
    }else{
        animal;
    }
}
