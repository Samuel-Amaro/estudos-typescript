/**
 * * OBJETOS VS ENUMS
 * 
 *  No TypeScript moderno, você pode não precisar de um enum quando um objeto com as const pode ser suficiente:
*/

const enum EDirection {
    Up,
    Down,
    Left,
    Right,
};

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
} as const;

EDirection.Up;

ODirection.Up;

// Usando o enum como parâmetro
function walk(dir: EDirection) {}

// Requer uma linha extra para extrair os valores
//Em vez disso, use keyof typeof para obter um Type que representa todas as chaves Enum como strings.
type Direction = typeof ODirection[keyof typeof ODirection];

function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

/**
 * O maior argumento a favor desse formato sobre o TypeScript enum é que ele mantém sua base de código alinhada com o estado do JavaScript e, quando/se enums forem adicionados ao JavaScript, você poderá passar para a sintaxe adicional.
*/