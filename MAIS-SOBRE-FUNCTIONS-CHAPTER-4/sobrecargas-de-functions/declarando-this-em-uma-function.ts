/**
 * * DECLARANDO THIS EM UMA FUNCTION
 * 
 *  O TypeScript inferirá o que this deve estar em uma função por meio da análise do fluxo de código, por exemplo:
*/

//declaramos um objeto anonimo e o atribuimos a constante user
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function() {
        this.admin = true;
    },
};

/**
 * O TypeScript entende que a função user.becomeAdmin tem um correspondente this que é o objeto externo user. this, heh , pode ser suficiente para muitos casos, mas há muitos casos em que você precisa de mais controle sobre o que o objeto this representa. A especificação do JavaScript afirma que você não pode ter um parâmetro chamado this, então o TypeScript usa esse espaço de sintaxe para permitir que você declare o tipo this no corpo da função.
*/

//declara um objeto do tipo DB
interface DB{
    //propriedades do objeto
    //declaramos um metodo do objeto, que aceita como paramentro uma expressão de tipo de function que define um paramentro this como tipo User e retorna um boolean
    //o metodo retorna um array de Users
    filterUsers(filter: (this: User) => boolean) : User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});

/**
 * Esse padrão é comum com APIs de estilo de retorno de chamada(callback), em que outro objeto geralmente controla quando sua função é chamada. Observe que você precisa usar function e não as funções de seta(arrow functions) para obter esse comportamento:
*/

interface DB2 {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db2 = getDB();
const admins2 = db.filterUsers(() => this.admin);