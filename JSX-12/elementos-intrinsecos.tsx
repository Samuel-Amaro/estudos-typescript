/**
 * * ELEMENTOS INTRÍNSECOS
 * 
 *  Os elementos intrínsecos são pesquisados na interface especial JSX.IntrinsicElements. Por padrão, se esta interface não for especificada, então vale tudo e os elementos intrínsecos não serão verificados por tipo. No entanto, se esta interface estiver presente, então o nome do elemento intrínseco é procurado como uma propriedade na interface JSX.IntrinsicElements. Por exemplo:
*/

declare namespace JSX {
    interface IntrinsicElements {
        foo: any;
    }
}

<foo />; //ok
<bar />; //erro

/**
 * No exemplo acima, <foo /> vai funcionar bem, mas <bar /> resultará em um erro, pois não foi especificado em JSX.IntrinsicElements. 
 * 
 * Nota: Você também pode especificar um indexador de string abrangente em JSX.IntrinsicElements do seguinte modo:
*/

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}