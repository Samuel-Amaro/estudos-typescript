/**
 * * SINTAXE DO MÓDULO ES
 * 
 * Um arquivo pode declarar uma exportação principal via export default:
*/

/*
@filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
*/

/**
 * Isso é importado via:
*/

//importamos uma function do modulo hello
import helloWorld from "./hello";

helloWorld();

/**
 * Além da exportação padrão, você pode ter mais de uma exportação de variáveis ​​e funções por meio export de omitindo default:
*/

/*
@filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
 
export class RandomNumberGenerator {}
 
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
*/

/**
 * Estes podem ser usados ​​em outro arquivo através da import sintaxe:
*/

//importando varias coisas por meio do import sintaxe
import { pi, phi, absolute } from "./maths";

console.log(pi);
const absPhi = absolute(phi);

