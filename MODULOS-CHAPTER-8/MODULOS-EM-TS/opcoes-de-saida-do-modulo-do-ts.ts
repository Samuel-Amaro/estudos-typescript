/**
 * *  OPÇÕES DE SAÍDA DO MÓDULO DO TS
 * 
 * Existem duas opções que afetam a saída do JavaScript emitida:
 * 
    *  targetque determina quais recursos JS são rebaixados (convertidos para executar em tempos de execução JavaScript mais antigos) e quais são deixados intactos
    * 
    * moduleque determina qual código é usado para os módulos interagirem uns com os outros
    * 
 * O que target você usa é determinado pelos recursos disponíveis no tempo de execução do JavaScript no qual você espera executar o código TypeScript. Isso pode ser: o navegador da Web mais antigo compatível, a versão mais baixa do Node.js na qual você espera executar ou pode vir de restrições do seu tempo de execução - como Electron, por exemplo.
 * 
 * Toda a comunicação entre os módulos acontece por meio de um carregador de módulo, a opção do compilador module determina qual deles é usado. Em tempo de execução, o carregador do módulo é responsável por localizar e executar todas as dependências de um módulo antes de executá-lo.
 * 
 * Por exemplo, aqui está um arquivo TypeScript usando a sintaxe do ES Modules, mostrando algumas opções diferentes para module:
*/

import {valueOfPi} from "./constants.js";

export const twoPi = valueOfPi * 2;

/**
 * ES2020
*/

import { valueOfPi } from "./constants.js";
export const twoPi = valueOfPi * 2;

/**
 * CommonJS
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;
 
/**
 * UMD 
*/

(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
    exports.twoPi = constants_js_1.valueOfPi * 2;
});

/**
 * Observe que o ES2020 é efetivamente igual ao original index.ts.
 * 
 * Você pode ver todas as opções disponíveis e a aparência do código JavaScript emitido na Referência TSConfig para module .
*/