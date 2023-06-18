/**
 * * TIPOS CONDICIONAIS DISTRIBUTIVOS
 * 
 * Quando os tipos condicionais atuam em um tipo genérico, eles se tornam distributivos quando recebem um tipo de união. Por exemplo, tome o seguinte:
*/

type ToArray<Type> = Type extends any ? Type[] : never;

/**
 * Se inserirmos um tipo de união em ToArray, o tipo condicional será aplicado a cada membro dessa união.
*/

type StrArrOrNumArr = ToArray<string | number>;

/**
 * O que acontece aqui é que StrArrOrNumArr distribui em:
*/

//string | number;

/**
 * e mapas sobre cada tipo de membro do sindicato, para o que é efetivamente:
*/

//ToArray<string> | ToArray<number>;

/**
 * o que nos deixa com:
*/

// string[] | number[];

/**
 * Normalmente, a distributividade é o comportamento desejado. Para evitar esse comportamento, você pode cercar cada lado da extends palavra-chave com colchetes.
*/

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;