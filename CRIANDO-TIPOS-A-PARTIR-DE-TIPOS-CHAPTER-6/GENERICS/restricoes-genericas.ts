/**
 * * RESTRIÇÕES GENÉRICAS(Generic Constraints)
 *  
 * Se você se lembra de um exemplo anterior, às vezes você pode querer escrever uma função genérica que funciona em um conjunto de tipos onde você tem algum conhecimento sobre quais recursos esse conjunto de tipos terá. Em nosso loggingIdentity exemplo, queríamos acessar a .length propriedade de arg, mas o compilador não conseguiu provar que todo tipo tinha uma .length propriedade, então ele nos avisa que não podemos fazer essa suposição.
 * 
 * Em vez de trabalhar com todo e qualquer tipo, gostaríamos de restringir essa função para funcionar com todo e qualquer tipo que também   tenha a .length propriedade. Desde que o tipo tenha este membro, vamos permitir, mas é necessário ter pelo menos este membro. Para fazer isso, devemos listar nosso requisito como uma restrição sobre o que Type pode ser.
 * 
 * Para fazer isso, criaremos uma interface que descreve nossa restrição. Aqui, criaremos uma interface que possui uma única .length propriedade e então usaremos essa interface e a extends palavra-chave para denotar nossa restrição:
*/

//criamos um novo tipo de objeto nomeado
//essa interface descreve nossa restrição
//aqui criaremos uma inteface que possui uma unica .length propriedade e então usaremos essa interface
interface Lengthwise{
    //propriedades
    lenght: number;
}

//declaramos uma function generica que define um paramentro de tipo esse paramentro de tipo e restrito a tipos que sejam do tipo Lenghtwise
//a function gerencia so aceitara tipos fornecidos pelo usuario que sejam do tipo Lengthwise, essa e uma forma de restringir os tipos aceitos
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type{
    console.log(arg.lenght); // Agora sabemos que tem uma propriedade .length, então não há mais erros
    return arg;
}

/**
 * Como a função genérica agora está restrita, ela não funcionará mais em nenhum e todos os tipos:
*/

//chama a fucntion generica, fazendo o compilador inferir o tipo baseado no argumento forneceido, assim ele mostra que o tipo number não e aceito na function generica
//usando a inferencia de argumento de tipo
//o compilador definira o valor de Type variavel de tipo na function para nos automaticamente com base no tipo de argumento que passamos
loggingIdentity(3);

/**
 * Em vez disso, precisamos passar valores cujo tipo tenha todas as propriedades necessárias:
*/

//fornecemos um objeto literal anonimo que esta de acordo com a restrição imposta na function generica para os tipos que são aceitos, que tenham uma proriedade lenght definida
loggingIdentity({lenght: 10, value: 3});