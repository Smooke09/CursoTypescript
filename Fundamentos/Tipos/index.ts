// TIPOS DE VARIAVEIS

//Number \/
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.5959559;

console.log(typeof y);

console.log(y.toPrecision(3));

console.log(y);

//String \/
const firstName: string = "Pedro";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Silva";

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

//Boolean \/

let a: boolean = false;

console.log(a);
console.log(typeof a);

// inference e annotation
let ann: string = "Teste";

let inf = "Test";
