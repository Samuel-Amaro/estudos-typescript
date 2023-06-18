/**
 * * INSTANCEOF ESTREITAMENTO
 * 
 *  O JavaScript possui um operador para verificar se um valor é ou não uma “instância” de outro valor. Mais especificamente, em JavaScript x instanceof Foo verifica se a cadeia de protótipos x contém Foo.prototype. Embora não nos aprofundemos aqui, e você verá mais sobre isso quando entrarmos nas aulas, eles ainda podem ser úteis para a maioria dos valores que podem ser construídos com new. Como você deve ter adivinhado, instanceof também é um tipo de proteção, e o TypeScript se restringe a ramificações protegidas por instanceofs.
*/

//declara uma function regular
//add anotações de tipo de paramentros
function logValue(x: Date | string) {
    //usamos o operador instanceof do JS
    //para verificar se um valor e ou não instancia de outro valor
    //aqui verificamos se o paramentro x e uma instancia de Date
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}