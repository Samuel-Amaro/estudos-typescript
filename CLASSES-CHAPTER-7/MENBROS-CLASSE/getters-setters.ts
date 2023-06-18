/**
 * * GETTERS / SETTERS
 * 
 *  As classes também podem ter acessadores :
*/

//declaramos uma class
class C1{
    //declarando campos da class
    //declaramos uma propriedade com visibilidade privada, inicializadda com valor
    _length = 0;

    //metodo acessor da class
    //acessar o valor da propriedade privada 
    get length() {
        return this._length;
    }

    //metodo acessor da class
    //grava novos valores na propriedade privadda
    set length(value) {
        this._length = value;
    }
}

/**
 * Observe que um par get/set baseado em campo sem lógica extra raramente é útil em JavaScript. Não há problema em expor campos públicos se você não precisar adicionar lógica adicional durante as operações get/set.
 * 
 * O TypeScript tem algumas regras de inferência especiais para acessadores:
 * 
    * Se get existe, mas não set, a propriedade é automaticamente readonly
    * 
    * Se o tipo do parâmetro setter não for especificado, ele será inferido a partir do tipo de retorno do getter
    * 
    * Getters e setters devem ter a mesma visibilidade de membro
    * 
 *  Desde o TypeScript 4.3 , é possível ter acessadores com diferentes tipos para obtenção e configuração
*/

//definimos uma class
class Thing{
    //declaramos campo da class
    //declaramos propriedades da class
    //declaramos uma prorpieade com visibilidade privada, e inicializada com um valor, inferida o seu tipo automaticamente pelo proprio ts
    _size = 0;

    //declara um metodo acessor da classe que retorna um tipo number
    //acessa a proprieade privada
    get size(): number {
        return this._size;
    }

    //declaramos um metodo acessor, que grava novos valores na proprieade privada
    //o metodo aceita como paramentro uma union de tipos, que possa corresponder a number, string ou boolean
    set size(value: string | number | boolean) {
        let num = Number(value);

        // Não permite NaN, Infinity, etc
        if(!Number.isFinite(num)) {
            this._size = 0;
            return;
        }

        this._size = num;
    }
}