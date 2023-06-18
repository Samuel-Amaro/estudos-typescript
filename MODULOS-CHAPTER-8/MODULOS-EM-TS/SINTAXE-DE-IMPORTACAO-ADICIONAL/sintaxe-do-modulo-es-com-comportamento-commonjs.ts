/**
 * * SINTAXE DO MÓDULO ES COM COMPORTAMENTO COMMONJS
 * 
 *  O TypeScript possui a sintaxe do módulo ES que se correlaciona diretamente com um CommonJS e AMD require. As importações usando o Módulo ES são , na maioria dos casos, as mesmas requiredesses ambientes, mas essa sintaxe garante que você tenha uma correspondência de 1 para 1 em seu arquivo TypeScript com a saída CommonJS:
*/

import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");

/**
 * Você pode aprender mais sobre esta sintaxe na página de referência dos módulos .
*/