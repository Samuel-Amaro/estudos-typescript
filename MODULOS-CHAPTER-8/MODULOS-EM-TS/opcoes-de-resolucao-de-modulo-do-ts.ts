/**
 * * OPÇÕES DE RESOLUÇÃO DE MÓDULO DO TS
 * 
 * A resolução do módulo é o processo de pegar uma string da instrução import or require e determinar a qual arquivo essa string se refere.
 * 
 * O TypeScript inclui duas estratégias de resolução: Classic e Node. Classic, o padrão quando a opção do compilador modulenão é commonjs, está incluído para compatibilidade com versões anteriores. A estratégia do Node replica como o Node.js funciona no modo CommonJS, com verificações adicionais para .tse .d.ts.
 * 
 * Existem muitos sinalizadores TSConfig que influenciam a estratégia do módulo no TypeScript: moduleResolution, baseUrl, paths, rootDirs.
 * 
 * Para todos os detalhes sobre como essas estratégias funcionam, você pode consultar a Resolução do Módulo .
*/