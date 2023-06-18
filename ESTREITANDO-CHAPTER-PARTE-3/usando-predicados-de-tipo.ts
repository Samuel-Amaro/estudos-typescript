/**
 * * USANDO PREDICADOS DE TIPO
 * 
 *  Até agora, trabalhamos com construções JavaScript existentes para lidar com o estreitamento, mas às vezes você deseja um controle mais direto sobre como os tipos mudam em todo o código.
 * 
 * Para definir um tipo de proteção definido pelo usuário, simplesmente precisamos definir uma função cujo tipo de retorno seja um predicado de tipo :
*/

//declaramos uma function regular
//add anotações de tipo de paramentro
//para definir um tipo de proteção definido pelo usuario, simplesmente precisamos definir uma function cujo tipo de retorno seja um preficado de tipo
//pet is Fish e o predicado de tipo neste exemplo
//o predicado assume a forma parameterName is Type
//paramenterName deve ser o nome de um paramentro da assinatura da function atual
function isFish(pet: Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined;
}

/**
 * pet is Fish é o nosso predicado de tipo neste exemplo. Um predicado assume a forma parameterName is Type, onde parameterName deve ser o nome de um parâmetro da assinatura da função atual.
 * 
 * Sempre que isFish for chamado com alguma variável, o TypeScript restringirá essa variável a esse tipo específico se o tipo original for compatível.
*/

// Ambas as chamadas para 'swim' e 'fly' agora estão corretas.
let pet = getSmallPet();

//verifica se pet e do tipo Fish
if(isFish(pet)) {
    pet.swim();
}else{
    pet.fly();
}

/**
 * Observe que o TypeScript não apenas sabe que pet é um Fish na if ramificação; ele também sabe que na else ramificação você não tem um Fish, então você deve ter um Bird.
 * 
 * Você pode usar o type guard isFish para filtrar um array de Fish | Bird e obter um array de Fish:
*/

//declara um array que pode ter elementos do tipo Fish ou Bird
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
//declara uma array que pode ter eleementos do tipo Fish
const underWater1: Fish[] = zoo.filter(isFish);
//or, equivalente
//array do tipo Fish
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// O predicado pode precisar ser repetido para exemplos mais complexos
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if(pet.name === "sharkey")
        return false;
    return isFish(pet);
})