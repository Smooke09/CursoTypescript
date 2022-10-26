// 1 void

function withoutReturn(): void {
  console.log("Esta função e Sem retorno!");
}

withoutReturn();

// 2 - Callback como argumento

function greeting(name: string): string {
  return `Hello ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função de saudação...");

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, "João");
preGreeting(greeting, "Pedro");

// 3 - Generic functions

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergerObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObj = mergerObjects({ name: "João" }, { age: 20, jobs: "Programmer" });

console.log(newObj);

// 4 - Constrains nas Generic functions

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(10, 20));
console.log(biggestNumber(5, 3));
