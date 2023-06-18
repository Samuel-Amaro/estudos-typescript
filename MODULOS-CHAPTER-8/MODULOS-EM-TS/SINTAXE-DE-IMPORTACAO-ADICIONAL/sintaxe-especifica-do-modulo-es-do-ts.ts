/**
 * * SINTAXE ESPECÍFICA DO MÓDULO ES DO TYPESCRIPT
 * 
 * Os tipos podem ser exportados e importados usando a mesma sintaxe dos valores JavaScript:
*/

//importamos tipos do ts
import { Cat, Dog } from "./animal";

//criamos um novo tipo Animals, que pode ser Cat ou Dog
type Animals = Cat | Dog;

/**
 * O TypeScript estendeu a import sintaxe com dois conceitos para declarar uma importação de um tipo:
*/

//import type

/**
 * Que é uma declaração de importação que só pode importar tipos:
*/

// @filename: animal.ts
/*export type Cat = { breed: string; yearOfBirth: number };
'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";
 
// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;
 
// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
*/

//este tipo de importação usando import type so pode importar tipos. no ts
import {createCatName} from "./animal";
const name = createCatName();

/**
 * type Importações em linha
 * 
 * O TypeScript 4.5 também permite que importações individuais sejam prefixadas type para indicar que a referência importada é um tipo:
*/

//usando o type prefixador para indiciar que a referencia importado e um tipo
import { createCatName as ccn2, type Cat as c2, type Dog as d2 } from "./animal";

export type Animals2 = c2 | d2;
const name2 = ccn2();

/**
 * Juntos, eles permitem que um transpiler não TypeScript como Babel, swc ou esbuild saiba quais importações podem ser removidas com segurança.
*/