/**
 * * INTEGRAÇÃO COM REACT
 * 
 * Para usar JSX com React, você deve usar a tipagem React. Essa tipagem define o namespace JSX apropriadamente para uso com React.
*/

///<reference path="react.d.ts" />

interface Props {
    foo: string;
}

class MyComponent extends React.Component<Props, {}>{
    render() {
        return <span>{this.props.foo}</span>;
    }
}

<MyComponent foo="bar" />; //ok
<MyComponent foo={0} />; //error

/**
 * * Configurando o JSX
 * 
 * Existem vários sinalizadores de compilador que podem ser usados para personalizar seu JSX, que funcionam tanto como um sinalizador do compilador quanto por meio de pragmas embutidos por arquivo. Para saber mais, consulte as páginas de referência do tsconfig:
 * 
 * jsxFactory
 * 
 * jsxFragmentFactoryj
 * 
 * jsxImportSource
*/