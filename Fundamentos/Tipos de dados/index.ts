// Array

// Podemos especificar um array como tipo tambem
// Se temos um array de numeros: number[]
// Se temos um array de strings: string[]
// isso acontece pois geralmente os arrays possuem apenas um unico tipo de dado entre seus itens

// Exemplo 1
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(5);

console.log(numbers[2]);

// Nao pode fazer isso \/
// numbers = "teste";

const nomes: string[] = ["João", "Maria", "José"];
// nao pode fazer isso \/
// nomes.push(4);
