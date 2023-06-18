"use strict";
//Cumprimenta o mundo.
//console.log("Hello world!");

//editando o codigo para dizer ao TS que person e uma string e que date deve ser um Date
//objeto
//adicionar anotações de tipo e person descrever datecom quais tipos de valores greetpodem ser chamados.
//Você pode ler essa assinatura como " greet leva um person tipo string e um date tipo Date".
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Maddison", new Date());