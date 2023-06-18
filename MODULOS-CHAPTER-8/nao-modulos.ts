/**
 * * NÃO MÓDULOS
 * 
 *  Antes de começarmos, é importante entender o que o TypeScript considera um módulo. A especificação JavaScript declara que qualquer arquivo JavaScript sem uma export ou await de nível superior deve ser considerado um script e não um módulo.
 * 
 * Dentro de um arquivo de script, as variáveis e os tipos são declarados no escopo global compartilhado e presume-se que você usará a opção do compilador outFile para unir vários arquivos de entrada em um arquivo de saída ou usar várias tags <script> em seu HTML para carregar esses arquivos (na ordem correta!).
 * 
 * Se você tiver um arquivo que atualmente não possui nenhuma importação ou exportação, mas deseja ser tratado como um módulo, adicione a linha:
*/

//queremos tratar esse arquivo como um modulo, podemos fazer isso add a seguinte linha
//mudamos o arquivo para que seja um modulo que não exporta nada
export {};

/**
 * que mudará o arquivo para ser um módulo que não exporta nada. Essa sintaxe funciona independentemente do destino do seu módulo.
*/