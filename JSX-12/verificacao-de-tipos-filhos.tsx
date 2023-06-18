/**
 * * VERIFICAÇÃO DE TIPOS FILHOS 
 * 
 * No TypeScript 2.3, TS introduziu verificação de tipo filho. children é uma propriedade especial em um tipo de atributos de elemento onde JSXExpressions são consideradas para seres inseridas nos elementos. Semelhante a como o TS usa JSX.ElementAttributesProperty para determinar o nome de props
, TS usa JSX.ElementChildrenAttribute
 para determinar o nome do filho dentro dessas props. JSX.ElementChildrenAttribute deve ser declarado com uma única propriedade.
*/

declare namespace JSX {
    interface ElementChildrenAttribute {
      // children é uma propriedade especial em um tipo de atributos de elemento onde JSXExpressions são consideradas para seres inseridas nos elementos.
      children: {}; //especifica o nome dos filhos a serem usados
    }
}

<div>
    <h1>Hello</h1>
</div>;

<div>
  <h1>Hello</h1>
  World
</div>;

const CustomComp = (props) => <div>{props.children}</div>

<CustomComp>
    <div>Hello World</div>
    {"This is just a JS expression..." + 1000}
</CustomComp>

/**
 * Você pode especificar o tipo do filho como qualquer outro atributo. Isso substituirá o tipo padrão de, por exemplo, a tipagem React se você os usar.
*/

interface PropsType{
    children: JSX.Element;
    name: string;
}

class Component extends React.Component<PropsType, {}>{
    render() {
        return (
            <h2>
                {this.props.children}
            </h2>
        );
    }
}

//OK

<Component name="foo">
    <h1>Hello World</h1>
</Component>

//Error: filhos é do tipo JSX.Element não array de JSX.Element

<Component name="bar">
    <h1>Hello World</h1>
    <h2>Hello World</h2>
</Component>

//Error: children is of type JSX.Element not array of JSX.Element or string.

<Component name="baz">
    <h1>Hello</h1>
    World
</Component>