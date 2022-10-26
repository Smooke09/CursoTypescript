"use strict";
// 1 void
function withoutReturn() {
    console.log("Esta função e Sem retorno!");
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Hello ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função de saudação...");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "João");
preGreeting(greeting, "Pedro");
// 3 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergerObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObj = mergerObjects({ name: "João" }, { age: 20, jobs: "Programmer" });
console.log(newObj);
// 4 - Constrains nas Generic functions
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(10, 20));
console.log(biggestNumber(5, 3));
