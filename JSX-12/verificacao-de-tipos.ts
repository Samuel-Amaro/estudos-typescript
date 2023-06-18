/**
 * * VERIFICAÇÃO DE TIPOS
 * 
 *  Para entender a verificação de tipo com JSX, você deve primeiro entender a diferença entre os elementos intrínsecos e os elementos baseados em valores. Dada uma expressão JSX <expr />, expr pode se referir a algo intrínseco ao ambiente (e.g. uma div ou span em um ambiente DOM) ou a um componente personalizado que você criou. Isto é importante por duas razões:
 * 
    * Para React, os elementos intrínsecos são emitidos como strings (React.createElement("div")), enquanto um componente que você criou não é (React.createElement(MyComponent)). 
    * 
    * Os tipos de atributos passados no elemento JSX devem ser pesquisados de forma diferente. Atributos de elementos intrínsecos devem ser conhecidos intrinsicamente, enquanto os componentes provavelmente desejarão especificar seu próprio conjunto de atributos.
    * 
 * TypeScript usa a mesma convenção que React usa para distinguir entre estes. Um elemento intrínseco sempre começa com uma letra minúscula e um elemento baseado em valor sempre começa com uma letra maiúscula.
*/