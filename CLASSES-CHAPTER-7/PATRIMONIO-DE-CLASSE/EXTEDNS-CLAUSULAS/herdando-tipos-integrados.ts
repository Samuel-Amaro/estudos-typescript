/**
 * * HERDANDO TIPOS INTEGRADOS
 * 
 *  Observação: se você não planeja herdar de tipos integrados como Array, Error, Map ou se seu destino de compilação estiver definido explicitamente como ES6/ES2015 ou superior, você pode pular esta seção
 * 
 * No ES2015, os construtores que retornam um objeto substituem implicitamente o valor de thisqualquer chamador de super(...). É necessário que o código do construtor gerado capture qualquer valor de retorno potencial super(...)e substitua-o por this.
 * 
 * Como resultado, subclasses Error, Arraye outros podem não funcionar mais como esperado. Isso se deve ao fato de que funções de construtor para Error, Arraye similares usam ECMAScript 6 new.targetpara ajustar a cadeia de protótipos; no entanto, não há como garantir um valor new.targetao chamar um construtor no ECMAScript 5. Outros compiladores de nível inferior geralmente têm a mesma limitação por padrão.
 * 
 * Para uma subclasse como a seguinte:
*/

class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

/**
 * você pode achar que: 
 * 
    * os métodos podem estar undefinedem objetos retornados pela construção dessas subclasses, portanto, a chamada sayHello resultará em um erro. 
    * 
    * instanceof será quebrado entre as instâncias da subclasse e suas instâncias, então (new MsgError()) instanceof MsgError retornará false.
    * 
    * Como recomendação, você pode ajustar manualmente o protótipo imediatamente após qualquer super(...) chamada.
    * 
 * 
*/ 

class MsgError extends Error {
  constructor(m: string) {
    super(m);
 
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError.prototype);
  }
 
  sayHello() {
    return "hello " + this.message;
  }
}

/**
 * No entanto, qualquer subclasse de MsgError terá que definir manualmente o protótipo também. Para tempos de execução que não suportam Object.setPrototypeOf, você pode usar __proto__. 
 * 
 * Infelizmente, essas soluções alternativas não funcionarão no Internet Explorer 10 e anteriores . Pode-se copiar manualmente os métodos do protótipo para a própria instância (ou seja , MsgError.prototype para this), mas a própria cadeia de protótipos não pode ser corrigida.
*/