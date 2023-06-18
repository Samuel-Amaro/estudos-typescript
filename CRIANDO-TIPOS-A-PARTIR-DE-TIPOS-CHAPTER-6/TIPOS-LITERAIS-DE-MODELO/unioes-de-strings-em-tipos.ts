/**
 * * UNIÕES DE STRING EM TIPOS
 * 
 *  O poder dos literais de modelo vem ao definir uma nova string com base nas informações dentro de um tipo.
 * 
 * Considere o caso em que uma função ( makeWatchedObject) adiciona uma nova função chamada on() a um objeto passado. Em JavaScript, sua chamada pode se parecer com: makeWatchedObject(baseObject). Podemos imaginar o objeto base como:
*/

const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
};

/**
 * A on função que será adicionada ao objeto base espera dois argumentos, um eventName(a string) e um callBack(a function).
 * 
 * O eventName deve ser da forma attributeInThePassedObject + "Changed"; assim, firstNameChanged conforme derivado do atributo firstName no objeto base.
 * 
    * A callBack função, quando chamada:
    * 
    * Deve ser passado um valor do tipo associado ao nome attributeInThePassedObject; portanto, como firstName é digitado como string, o retorno de chamada do firstNameChanged evento espera que um string seja passado para ele no momento da chamada. Da mesma forma, eventos associados a age devem ser chamados com um number argumento
    * 
    * Deve ter o void tipo de retorno (para simplificar a demonstração)
    * 
 *  A assinatura da função ingênua de on()pode ser: on(eventName: string, callBack: (newValue: any) => void). No entanto, na descrição anterior, identificamos restrições de tipo importantes que gostaríamos de documentar em nosso código. Os tipos literais de modelo nos permitem trazer essas restrições para o nosso código.
*/

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

//makeWatchedObject adicionou `on` ao objeto anônimo
person.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
});

/**
 * Observe que on escuta no evento "firstNameChanged", não apenas "firstName". Nossa especificação ingênua de on() poderia ser mais robusta se garantissemos que o conjunto de nomes de eventos elegíveis fosse limitado pela união de nomes de atributos no objeto observado com “Changed” adicionado ao final. Embora estejamos confortáveis ​​em fazer esse cálculo em JavaScript , por exemplo, os Object.keys(passedObject).map(x => `${x}Changed`) literais de modelo dentro do sistema de tipos fornecem uma abordagem semelhante à manipulação de strings:
*/

type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

/// Cria um "objeto observado" com um método 'on'
/// para que você possa observar as alterações nas propriedades.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

/**
 * Com isso, podemos construir algo que dá erro quando recebe a propriedade errada:
*/

person.on("firstNameChanged", () => {});

// Evita erro humano fácil (usando a chave em vez do nome do evento)
person.on("firstName", () => {});

// É resistente a erros de digitação
person.on("frstNameChanged", () => {});
