/**
 * * SINTAXE DE IMPORTAÇÃO ADICIONAL
 * 
 *  Uma importação pode ser renomeada usando um formato como import {old as new}:
*/

//importando usando sintaxe de importação adicional
//usando um formato de importação {old as new} dando apelido para aquilo que importo
import { pi as π} from "../maths";

console.log(π);

/**
 * Você pode misturar e combinar a sintaxe acima em uma única import: 
*/

/*
@filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";
RandomNumberGenerator;
console.log(π);
*/

/**
 * Você pode pegar todos os objetos exportados e colocá-los em um único namespace usando * as name:
*/

//@filename: app.ts
//import * as math from "./maths.js";
 
//console.log(math.pi);
//const positivePhi = math.absolute(math.phi);

/**
 * Você pode importar um arquivo e não incluir nenhuma variável em seu módulo atual via import "./file":
*/

// @filename: app.ts
//import "./maths.js";
//console.log("3.14");

/**
 * Nesse caso, o import não faz nada. No entanto, todo o código maths.ts foi avaliado, o que pode desencadear efeitos colaterais que afetam outros objetos.
*/