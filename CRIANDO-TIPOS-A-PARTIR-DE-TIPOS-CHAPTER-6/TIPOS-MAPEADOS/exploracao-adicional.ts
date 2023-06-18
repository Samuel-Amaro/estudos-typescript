/**
 * * EXPLORAÇÃO ADICIONAL
 * 
 * Tipos mapeados funcionam bem com outros recursos nesta seção de manipulação de tipo, por exemplo, aqui está um tipo mapeado usando um tipo condicional que retorna um true ou false dependendo se um objeto tem a propriedade pii definida como literal true:
*/

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;