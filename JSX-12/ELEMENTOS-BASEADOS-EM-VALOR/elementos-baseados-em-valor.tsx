/**
 * * ELEMENTOS BASEADOS EM VALOR
 * 
 * Os elementos baseados em valor são simplesmente pesquisados por identificadores que estão no escopo.
*/

import MyComponent from "./myComponent";

<MyComponent />; //ok
<SomeOtherComponent />; //erro

/**
 * Existem duas maneiras de definir um elemento baseado em valor:
 * 
    * Function Component (FC)
    * 
    * Class Component
    * 
 * Como esses dois tipos de elementos baseados em valor são indistinguíveis um do outro em uma expressão JSX, primeiro o TS tenta resolver a expressão como um componente de função usando resolução de sobrecarga. Se o processo for bem-sucedido, o TS termina de resolver a expressão para sua declaração. Se o valor não resolver como um componente de função, o TS tentará resolvê-lo como um componente de classe. Se isso falhar, o TS relatará um erro.  
*/