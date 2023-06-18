/**
 * * VERIFICAÇÃO DE TIPO DE ATRIBUTO
 * 
 *  A primeira etapa para os atributos de verificação de tipo é determinar o tipo de atributos de elemento. Isso é ligeiramente diferente entre os elementos intrínsecos e os baseados em valores.
 * 
 * Para elementos intrínsecos, é o tipo da propriedade em JSX.IntrinsicElements
*/

declare namespace JSX {
    interface IntrinsicElements {
        //determinar o tipo de atributos de elemento
        //nos elemenetos intrinsecos e o tipo da propriedade em JSX.IntrinsicElements
        foo: {bar?: boolean };
    }
}

//tipo de atributos de elemento para 'foo' é '{bar?: boolean}'

/**
 * Para elementos baseados em valor, é um pouco mais complexo. É determinado pelo tipo de uma propriedade no tipo de instância do elemento que foi determinado anteriormente. Qual propriedade usar é determinada por JSX.ElementAttributesProperty. Deve ser declarado com uma única propriedade. O nome dessa propriedade é então usado. A partir do TypeScript 2.8, se JSX.ElementAttributesProperty não for fornecido, o tipo de primeiro parâmetro do construtor do elemento de classe ou a chamada do fucntion componenent será usada.
*/

declare namespace JSX {
    //determinar o tipo de atributos de elemento, para elementos baseados em valor
    //É determinado pelo tipo de uma propriedade no tipo de instância do elemento que foi determinado anteriormente. Qual propriedade usar é determinada por JSX.ElementAttributesProperty
    //Deve ser declarado com uma única propriedade. O nome dessa propriedade é então usado.
    interface ElementAttributesProperty{
        props; //Especifica o nome da propriedade a usar
    }
}

class MyComponent{
    //determinar o tipo de atributos de elemento, para elementos baseados em valor
    //É determinado pelo tipo de uma propriedade no tipo de instância do elemento que foi determinado anteriormente. Qual propriedade usar é determinada por JSX.ElementAttributesProperty. Deve ser declarado com uma única propriedade. 
    //especifica a propriedade no tipo de instancia do elemento
    props: {
        foo?: string;
    };
}

//tipo de atributos de elemento para 'MyComponent' é '{foo?: string}'
<MyComponent foo="bar" />;

/**
 * O tipo de atributo de elemento é usado para verificar o tipo dos atributos no JSX. Propriedades opcionais e obrigatórias são suportadas.
*/

declare namespace JSX {
    interface IntrinsicElements {
        //O tipo de atributo de elemento é usado para verificar o tipo dos atributos no JSX.
        //determinar o tipo de atributos de elemento
        //nos elemenetos intrinsecos e o tipo da propriedade em JSX.IntrinsicElements
        foo: {requiredProp: string; optionalProp?: number};
    }
}

<foo requiredProp="bar" />; //ok
<foo requiredProp="bar" optionalProp={0} />; //ok
<foo />; //error, requiredProp é ausente
<foo requiredProp={0} />; //erro, requiredProp deve ser uma string
<foo requiredProp="bar" unknownProp/>; // erro, unknownProp não existe
<foo requiredProp="bar" some-unknown-prop />; // ok, porque 'some-unknown-prop' não é um identificador válido

/**
 * Nota: Se um nome de atributo não for um identificador JS válido (como um atributo data-*), não é considerado um erro se não for encontrado no tipo de atributos do elemento.
 * 
 * Além disso, a interface JSX.IntrinsicAttributes pode ser usada para especificar propriedades extras usadas pela estrutura JSX que geralmente não são usadas pelos adereços ou argumentos dos componentes - por exemplo key em React. Especializando-se ainda mais, o tipo genérico JSX.IntrinsicClassAttributes<T> também pode ser usado para especificar o mesmo tipo de atributos extras apenas para class components (e não Function Components). Nesse tipo, o parâmetro genérico corresponde ao tipo de instância de classe. Em React, isso é usado para permitir o atributo ref do tipo Ref<T>. De modo geral, todas as propriedades dessas interfaces devem ser opcionais, a menos que você pretenda que os usuários de sua estrutura JSX precisem fornecer algum atributo em cada tag.
 * 
 * O operador de propagação também funciona:
*/

var props = {requiredProp: "bar"};
<foo {...props} />; //ok

var badProps = {};
<foo {...badProps} />; //erro