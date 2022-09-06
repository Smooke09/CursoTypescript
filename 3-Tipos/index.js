"use strict";
//1 - Array typescript sintaxes mas utilizada \/
let number = [1, 2, 3, 4, 5];
number.push(6);
console.log(number[3]);
let names = ["João", "Maria", "José"];
console.log(names[2]);
//2 - OUtra sintaxes do Array \/
let carros = ["Gol", "Palio", "Uno"];
let placas = [123, 456, 789];
console.log(carros[1]);
console.log(placas[2]);
//3 -  Any type \/
const arr1 = [1, "string", true, { nome: "pedro" }];
console.log(arr1);
//4-  Podemos definir o tipo  de cada parametro de uma função \/
function getName(name) {
    console.log(name);
}
getName("Pedro da funcão");
//5 - Podemos definir o tipo de retorno de uma função \/
function greetings(name) {
    return `Hello ${name}`;
}
console.log(greetings("Pedro"));
// 6 - Funcao anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(sallary);
}, 2000);
// 7 - Tipos de objetos \/
function passCoordinates(coord) {
    console.log("X coordinantes: " + coord.x);
    console.log("Y coordinantes: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = {
    nome: "Pedro",
    surname: "Lucas",
};
// 8 - Propriedades opcionais \/
function showNUmbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNUmbers(1, 2, 3);
showNUmbers(4, 5);
// showNUmbers(6);
// 9 - Validando argumento opcional \/
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem ?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Pedro", "Lucas"));
console.log(advancedGreeting("Matheus"));
// 10 - Union types \/
// Union type e uma alternativa melhor do que o any;
// Onde podemos determinar dois tipos para um dado;
// A sintaxe: number | string
function showBalance(balance) {
    console.log(`O saldo da conta e R$${balance}`);
}
showBalance(100);
showBalance("100");
const arry = [1, "teste", true];
// 11 - Avancando em unio types \/
// Podemos utilizar condicionais para validação do tipo union types
// Com isso e possível trilhar rumos diferentes, baseado no tipo de dado;
// Para checar o tipo utilizamos typeof
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado!";
    }
    return `A funcao do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`"O ID é: ${id}`);
}
showId(12);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Pedro", age: 21 };
console.log(somePerson);
// Nao tem como fazer modificação no type então a interface acaba sendo mas utilizada
// type personType = {
//   age: number;
// };
// 15 - Literal types \/
// Literal types e um recurso que permite colocar valores como tipos;
// Isso restringe o uso a nao so tipos, como também os próprios valores;
// Este recurso e muito utilizado com Union types
let test;
test = "testando";
console.log(test);
// restringindo Valores \/
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// 16 - Non-null assertion Operator
// As vezes o TypeScript pode evidenciar um erro, baseado em um valor que no momento do código ainda nao esta disponível;
// Porem se sabemos que este valor sera preenchido, podemos evitar o erro;
// Utilizamos o carácter => !
const p = document.getElementById("some-p");
// Operador e quando a gente sabe que tem o elemento no dom e quer identificar ele no typescript e evitar error no caminho
console.log(p.innerText);
// 17 - Bigint \/
// Com o tipo bigint podemos declarar números com valores muito altos;
// Podemos utilizar a notação lítera, exemplo: 100n
// Para este recurso precisamos mudar a configuração do TS para versão minima de ES2020
let n;
// n = 1;
n = 1000n;
console.log(n);
console.log(typeof n);
// 18 - Symbol \/
// De forma resumida, o Symbol cria uma referencia única para um valor
// Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes;
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
