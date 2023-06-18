/**
 * * SINDICATOS DISCRIMINADOS(Discriminated unions) 
 * 
 * A maioria dos exemplos que vimos até agora se concentrou em restringir variáveis ​​únicas com tipos simples como string, boolean e number. Embora isso seja comum, na maioria das vezes em JavaScript estaremos lidando com estruturas um pouco mais complexas.
 * 
 * Para alguma motivação, vamos imaginar que estamos tentando codificar formas como círculos e quadrados. Os círculos acompanham seus raios e os quadrados acompanham os comprimentos de seus lados. Usaremos um campo chamado kind para informar com qual forma estamos lidando. Aqui está uma primeira tentativa de definir Shape.
*/

//declaramos uma forma e um tipo de objeto chamado Shape
interface Shape{
    //propriedades do objeto
    //add anotações de tipo
    //aqui add anotações de union de tipos literais de string "circle" e "square"
    kind: "circle" | "square";
    radius?: number; //propriedade opcional
    sideLength?: number; //propriedade opcional
}

/**
 * Observe que estamos usando uma união de tipos literais de string: "circle"e "square"para nos dizer se devemos tratar a forma como um círculo ou um quadrado, respectivamente. Ao usar "circle" | "square" em vez de string, podemos evitar problemas de ortografia.
*/

//declara uma function regular
//add anotações de tipo de paramentro
function handleShape(shape: Shape) {
    //oops!
    if(shape.kind === "rect") {
        //...
    }
}

/**
 * Podemos escrever uma getArea função que aplique a lógica correta com base em se está lidando com um círculo ou quadrado. Vamos primeiro tentar lidar com círculos.
*/

//cria uma function regular
//add anotações de paramentro de tipo
function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
}

/**
 * Sob strictNullChecks isso nos dá um erro - o que é apropriado, pois radius pode não ser definido. Mas e se fizermos as devidas verificações na kind propriedade?
*/

function getArea2(shape: Shape) {
    //estreitando codigo igualmente
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}

/**
 * Hmm, o TypeScript ainda não sabe o que fazer aqui. Atingimos um ponto em que sabemos mais sobre nossos valores do que o verificador de tipos. Poderíamos tentar usar uma afirmação não nula (a !after shape.radius) para dizer que radius está definitivamente presente.
*/

function getArea3(shape: Shape) {
    if(shape.kind === "circle") {
        //shape.radius e convertido para false e o negação o inverte para true
        return Math.PI * shape.radius ! ** 2;
    }
}

/**
 * Mas isso não parece ideal. Tivemos que gritar um pouco com o verificador de tipo com essas asserções não nulas ( !) para convencê-lo de que shape.radius estava definido, mas essas asserções são propensas a erros se começarmos a mover o código. Além disso, fora de strictNullChecks nós podemos acessar acidentalmente qualquer um desses campos de qualquer maneira (já que as propriedades opcionais são consideradas sempre presentes ao lê-los). Nós definitivamente podemos fazer melhor.
 * 
 * O problema com essa codificação Shape é que o verificador de tipo não tem como saber se está ou não radius presente sideLength com base na kind propriedade. Precisamos comunicar o que sabemos ao verificador de tipos. Com isso em mente, vamos dar outro passo na definição de Shape.
*/

//declaramos uma forma e um tipo de objeto chamado Circle
interface Circle{
    //definimos um tipo literal string chamado circle
    kind: "circle";
    radius: number;
}

//declaramos uma forma e um tipo de objeto chamado Square
interface Square {
    //define um tipo literal strig chamdo square
    kind: "square";
    sideLength: number;
}

//define um tipo chamado Shape que e do tipo um objeto Circle ou Square usando unions para fazer essa combinação de tipos
type Shape2 = Circle | Square;

/**
 * Aqui, separamos adequadamente Shape em dois tipos com valores diferentes para a kind propriedade, mas radius são sideLength declarados como propriedades obrigatórias em seus respectivos tipos.
 * 
 * Vamos ver o que acontece aqui quando tentamos acessar o radius de um arquivo Shape.
*/

function getArea(shape: Shape2) {
    return Math.PI * shape.radius ** 2;
}

/**
 * Como em nossa primeira definição de Shape, isso ainda é um erro. Quando radius era opcional, obtínhamos um erro (com strictNullChecks habilitado) porque o TypeScript não sabia se a propriedade estava presente. Agora que Shape é uma união, o TypeScript está nos dizendo que shape pode ser um Square, e Squares não está radius definido neles! Ambas as interpretações estão corretas, mas apenas a codificação de união de Shape causará um erro, independentemente de como strictNullChecks está configurado.
 * 
 * Mas e se tentássemos verificar a kind propriedade novamente?
*/

function getArea4(shape: Shape2) {
    //estreitamento de igualdade
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}

/**
 * Isso acabou com o erro! Quando cada tipo em uma união contém uma propriedade comum com tipos literais, o TypeScript considera isso uma união discriminada e pode limitar os membros da união.
 * 
 * Nesse caso, kind era aquela propriedade comum (que é considerada uma propriedade discriminante de  Shape). Verificando se a kind propriedade foi "circle" eliminada de todos os tipos Shape que não tinham uma kind propriedade com o tipo "circle". Isso se reduziu shape ao tipo Circle.
 * 
 * A mesma verificação também funciona com switch declarações. Agora podemos tentar escrever nosso completo getArea sem nenhuma !asserção não nula irritante.
*/

function getArea5(shape: Shape2) {
    //estreitamento de igualdade
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

/**
 * O importante aqui foi a codificação de Shape. Comunicar as informações corretas para o TypeScript - que Circle eram Square realmente dois tipos separados com kind campos específicos - era crucial. Fazendo isso, vamos escrever código TypeScript seguro que não parece diferente do JavaScript que teríamos escrito de outra forma. A partir daí, o sistema de tipos foi capaz de fazer a coisa “certa” e descobrir os tipos em cada ramificação de nossa switch instrução.
 * 
 * Como um aparte, tente brincar com o exemplo acima e remova algumas das palavras-chave de retorno. Você verá que a verificação de tipo pode ajudar a evitar bugs ao cair acidentalmente em diferentes cláusulas em uma switch instrução.
 * 
 * As uniões discriminadas são úteis para mais do que apenas falar sobre círculos e quadrados. Eles são bons para representar qualquer tipo de esquema de mensagens em JavaScript, como ao enviar mensagens pela rede (comunicação cliente/servidor) ou codificar mutações em uma estrutura de gerenciamento de estado.
*/