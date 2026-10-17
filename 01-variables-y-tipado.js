// Variables
let message = 'Esto es una variable';
console.log(message);

message = 'Esta variable acaba de cambiar su valor';
console.log(message);

let number = 1234;
console.log(number);

let isValid = true;
console.log(isValid);

let myUndefined;
console.log(myUndefined);

let myNull = null;
console.log(myNull);

// Constantes
const PI = 3.1416;
console.log('El valor de pi es: ', PI);
console.log(`El valor de pi es: ${PI}`);
console.log(`El valor de pi por 2 es: ${PI * 2}`);
console.log(`El valor de pi al cuadrado es: ${PI ** 2}`);

const WEDDING_DAY = 'Wedding Day: 28-06-1997';
console.log(WEDDING_DAY);

// Arrays
let myArray = [10, 20, 30];
console.log(myArray);

// Objetos
let myObject = {
  title: 'Harry Potter',
  pages: 200,
};
console.log(myObject);
console.log(myObject.pages);
console.log(myObject.title);

// tipado débil y dinámico
let myName = 'Antonio';
let myNumber = 5;

console.log(typeof myName);
console.log(typeof myNumber);

myNumber = true;
console.log(typeof myNumber);
