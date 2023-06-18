/**
 * * USO BÁSICO
 * 
 * Para usar JSX, você deve fazer duas coisas.
 * 
 * Nomeie seus arquivos com extensão .tsx
 * 
 * Ativar a opção jsx
 * 
 * TypeScript vem com três modos JSX: preserve, react, e react-native. Esses modos afetam apenas o estágio de emissão - verificação de tipo não é afetada. O modo preserve manterá o JSX como parte da output para ser posteriormente consumido por outra etapa de transformação (e.g. Babel). Além disso, a output terá uma extensão de arquivo .jsx. O modo react vai emitir React.createElement, não precisa passar por uma transformação JSX antes de usar, e a saída terá uma extensão de arquivo .js. O modo react-native é o equivalente ao modo preserve no sentido de que mantém todos os JSX, mas a saída terá uma extensão de arquivo .js.
*/