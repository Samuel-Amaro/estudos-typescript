/**
 * * INCORPORANDO EXPRESSÕES
 * 
 * JSX permite que você incorpore expressões entre as tags circundando as expressões com chaves ({ }).
*/

var a = (
    <div>
    {
        ["foo", "bar"].map((i) => (
            <span>{i / 2}</span>
        ))
    }
    </div>
);

/**
 * O código acima resultará em um erro, pois você não pode dividir uma string por um número. A saída, ao usar a opção preserve, parece:
*/

var a = (
    <div>
    {
        ["foo", "bar"].map(function (i) {
            return <span>{i / 2}</span>;
        })
    }
    </div>
);