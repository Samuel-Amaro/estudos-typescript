/**
 * * USANDO PARÂMETROS DE TIPO EM RESTRIÇÕES GENÉRICAS
 * 
 * Você pode declarar um parâmetro de tipo restrito por outro parâmetro de tipo. Por exemplo, aqui gostaríamos de obter uma propriedade de um objeto dado seu nome. Gostaríamos de garantir que não estamos capturando acidentalmente uma propriedade que não existe no obj, então colocaremos uma restrição entre os dois tipos:
*/

//declara uma function generica que aceita dois paramentros de tipo Type e Key que são restritos a serem aceito os tipos fornecidos se somente o Key paramentro de tipo existir no paramentro de tipo Type
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

//Gostaríamos de garantir que não estamos capturando acidentalmente uma propriedade que não existe no obj
//a existe em x
getProperty(x, "a");
//m não existe em x
getProperty(x, "m");
