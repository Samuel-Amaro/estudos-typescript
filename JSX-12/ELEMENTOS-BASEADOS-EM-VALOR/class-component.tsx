/**
 * * CLASS COMPONENT
 * 
 * É possível definir o tipo de um componente da classe. No entanto, para fazer isso, é melhor entender dois novos termos: o tipo de classe de elemento e tipo de instância de elemento.
 * 
 * Dado <Expr />, o tipo de classe de elemento é o tipo de Expr. Portanto, no exemplo acima, se MyComponent era uma classe ES6, o tipo de classe seria o construtor dessa classe e estática. Se MyComponent era uma função factory, o tipo de classe seria essa função.
 * 
 * Uma vez que o tipo de classe é estabelecido, o tipo de instância é determinado pela união dos tipos de retorno da construção do tipo de classe ou assinaturas de chamada (o que estiver presente). Então, novamente, no caso de uma classe ES6, o tipo de instância seria o tipo de uma instância dessa classe, e no caso de uma função factory, seria o tipo do valor retornado da função.
*/

class MyComponent{
    render() {}
}

//use uma assinatura de construção
var myComponent = new MyComponent();

//tipo de elemento class => MyComponent
//tipo elemento instancia class => {render() => void}

function MyFactoryFunction() {
    return {
        render: () => {},
    };
}

//use uma assinatura de chamada
var myComponent = MyFactoryFunction();

//tipo elemento class => MyFactoryFunction
//tipo elemento instancia => { render: () => void}

/**
 * O tipo de instância do elemento é interessante porque deve ser atribuível a JSX.ElementClass ou resultará em um erro. Por padrão JSX.ElementClass é {}, mas pode ser aumentado para limitar o uso de JSX apenas aos tipos que estão em conformidade com a interface adequada.
*/

declare namespace JSX {
    interface ElementClass {
        render: any;
    }
}

<MyComponent />; //ok
<MyFactoryFunction />; //ok

class NotAValidComponent {}

function NotAValidFactoryFunction() {
    return {};
}

<NotAValidComponent />; // error
<NotAValidFactoryFunction />; // error