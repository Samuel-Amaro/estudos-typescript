//combinando a sintaxe padrão de importação com a adicional, em uma unica import instrução
//importando o principal do modulo e um extra add uma sintaxe adicional de importação
import RandomNumberGenerator, {pi as  π} from "../maths";

RandomNumberGenerator;

console.log(π);

//add todos os objetos exportamos do modulo maths em um unico namespace usando * as name
import * as math from "../maths";

console.log(math.phi);
const positivePhi = math.absolute(math.phi);

//importando um arquivo e não incluindo nenhuma variavel em seu modulo atual
import "../maths";

console.log("3.14");