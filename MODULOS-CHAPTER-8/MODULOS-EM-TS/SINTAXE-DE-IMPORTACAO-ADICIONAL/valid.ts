//usando uma delcaração de import instrução especifica do ts para importar somente tipos
import type {Cat, Dog} from "./animal";

//criamos um novo tipo Animals, que pode ser Cat ou Dog
type Animals = Cat | Dog;