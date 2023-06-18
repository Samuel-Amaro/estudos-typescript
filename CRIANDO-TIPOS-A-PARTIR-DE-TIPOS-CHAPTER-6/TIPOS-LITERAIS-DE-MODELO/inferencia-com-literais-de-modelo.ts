/**
 * * INFERÊNCIA COM LITERAIS DE MODELO 
 * 
 * Observe que não nos beneficiamos de todas as informações fornecidas no objeto original passado. Dada a mudança de a firstName(ou seja, um firstNameChanged evento), devemos esperar que o callback receba um argumento do tipo string. Da mesma forma, o retorno de chamada para uma alteração age deve receber um number argumento. Estamos ingenuamente usando any para digitar o callBack argumento 's. Novamente, os tipos literais de modelo permitem garantir que o tipo de dados de um atributo será o mesmo tipo do primeiro argumento do retorno de chamada desse atributo.
 * 
 * O principal insight que torna isso possível é o seguinte: podemos usar uma função com um genérico tal que:
 * 
    * O literal usado no primeiro argumento é capturado como um tipo literal
    * 
    * Esse tipo literal pode ser validado como estando na união de atributos válidos no genérico
    * 
    * O tipo do atributo validado pode ser consultado na estrutura do genérico usando Acesso Indexado
    * 
    * Essas informações de digitação podem ser aplicadas para garantir que o argumento para a função de retorno de chamada seja do mesmo tipo  
*/

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};
 
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
 
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person.on("firstNameChanged", newName => {
                                
(parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});
 
person.on("ageChanged", newAge => {
                          
(parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})

/**
 * Aqui fizemos onum método genérico.
 * 
 * Quando um usuário chama com a string "firstNameChanged", o TypeScript tentará inferir o tipo certo para Key. Para fazer isso, ele corresponderá Key ao conteúdo anterior "Changed"e inferirá a string "firstName". Uma vez que o TypeScript descobre isso, o on método pode buscar o tipo de firstName no objeto original, que é string neste caso. Da mesma forma, quando chamado com "ageChanged", o TypeScript encontra o tipo da propriedade age que é number.
 * 
 * A inferência pode ser combinada de maneiras diferentes, muitas vezes para desconstruir strings e reconstruí-las de maneiras diferentes.
*/