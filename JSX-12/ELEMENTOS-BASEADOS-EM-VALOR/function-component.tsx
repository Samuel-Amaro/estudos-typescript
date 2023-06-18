/**
 * * FUNCTION COMPONENT
 * 
 *  Como o nome sugere, o componente é definido como uma função JavaScript em que seu primeiro argumento é um objeto props. TS impõe que seu tipo de retorno deve ser atribuível a JSX.Element.
*/

interface FooProp {
    name: string;
    X: number;
    Y: number;
}

declare function AnotherComponent(prop: {name: string});

function ComponentFoo(prop: FooProp) {
    return <AnotherComponent name={prop.name} />;
}

const Button = (prop: {value: string}, context: {color: string}) => (<button />);

/**
 * Como um componente de função é simplesmente uma função JavaScript, sobrecargas de função também podem ser usadas aqui:
*/

interface ClickableProps {
    children: JSX.Element[] | JSX.Element
};

interface HomeProps extends ClickableProps {
    home: JSX.Element;
}

interface SideProps extends ClickableProps{
    side: JSX.Element | string;
}

function MainButton(prop: HomeProps): JSX.Element;
function MainButton(prop: SideProps): JSX.Element {
    //...
}

/**
 * Nota: Componentes de Função eram anteriormente conhecidos como Stateless Function Components (SFC). Como Function Components não pode mais ser considerado sem estado nas versões recentes do react, o tipo SFC e seu alias StatelessComponent foram descontinuados.
*/