/**
 * * TIPOS DE EXTENSÃO
 * 
 *  É muito comum ter tipos que podem ser versões mais específicas de outros tipos. Por exemplo, podemos ter um BasicAddress tipo que descreva os campos necessários para o envio de cartas e pacotes nos EUA
*/

//declara um tipo de objeto nomeado
interface BasicAddress{
    //define propriedades
    //o tipo, se a propriedade é opcional e se a propriedade pode ser gravada.
    name?: string; //propriedade opcional
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

/**
 * Em algumas situações, isso é suficiente, mas os endereços geralmente têm um número de unidade associado a eles se o prédio em um endereço tiver várias unidades. Podemos então descrever um arquivo AddressWithUnit.
*/

//declara um tipo de objeto nomeado
interface AddressWithUnit{
    //define propriedades
    name?: string; //propriedade opcional
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

/**
 * Isso faz o trabalho, mas a desvantagem aqui é que tivemos que repetir todos os outros campos de BasicAddress quando nossas alterações eram puramente aditivas. Em vez disso, podemos estender o BasicAddress tipo original e apenas adicionar os novos campos que são exclusivos para AddressWithUnit.
*/

//extendendo o tipo BasicAddres original e adicionado novos campos no novo tipo que estamos criando baseado no tipo que estamos extendendo, uma maneira de obter algo que ja existe e so add mais coisas
//a extends palavra-chave an interface nos permite copiar efetivamente membros de outros tipos nomeados e adicionar quaisquer novos membros que desejarmos
interface AddresWithUnit extends BasicAddress{
    //propriedades
    unit: string;
}

/**
 * A extends palavra-chave an interface nos permite copiar efetivamente membros de outros tipos nomeados e adicionar quaisquer novos membros que desejarmos. Isso pode ser útil para reduzir a quantidade de clichê de declaração de tipo que temos que escrever e para sinalizar a intenção de que várias declarações diferentes da mesma propriedade podem estar relacionadas. Por exemplo, AddressWithUnit não precisou repetir a street propriedade e, como street se origina de BasicAddress, o leitor saberá que esses dois tipos estão relacionados de alguma forma.
 * 
 * interfaces também podem se estender de vários tipos.
*/

//declaramos um tipo de objeto nomeado
interface Colorful{
    color: string;
}

//declaramos outro tipo de objeto nomeado
interface Circle{
    radius: number;
}

//aqui iremos extender dois tipos nomeados Colorful, e Circle, para criamos um novo tipo, com propriedades ja existentes
interface ColorfulCircle extends Colorful, Circle { }

//declara um objeto do tipo ColorfulCircle
const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};
