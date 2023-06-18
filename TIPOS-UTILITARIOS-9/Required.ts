/**
 * * Required<Type>
 * 
 *  Constrói um tipo consistindo de todas propriedades de T definidas como obrigatórias. O oposto de Partial.
*/

interface Props{
    a?: number;
    b?: string;
}

const obj: Props = {a: 5};

const obj2: Required<Props> = {a: 5};

