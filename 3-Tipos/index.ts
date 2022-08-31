//Array typescript sintaxes mas utilizada
let number: number[] = [1, 2, 3, 4, 5];

number.push(6);

console.log(number[3]);

let names: string[] = ["João", "Maria", "José"];

console.log(names[2]);

// OUtra sintaxes do Array

let carros: Array<string> = ["Gol", "Palio", "Uno"];

let placas: Array<number> = [123, 456, 789];

console.log(carros[1]);

console.log(placas[2]);

// Any type

const arr1: any = [1, "string", true, { nome: "pedro" }];

console.log(arr1);

// Podemos definir o tipo  de cada parametro de uma função

function getName(name: string) {
  console.log(name);
}

getName("Pedro da funcão");

// Podemos definir o tipo de retorno de uma função

function greeting(name: string) {
  return `Hello ${name}`;
}

console.log(greeting("Pedro"));
console.log(greeting("Lucas"));
