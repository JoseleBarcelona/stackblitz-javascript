// Las funciones son bloques de código para reutilizarlo cuando nos interese y así no tener que repetirlo

// Funciones declaradas (A las funciones se les da un nombre)
function sayHello() {
  console.log('Hola Mundo!');
}

sayHello();
console.log('____________________');

// Funciones declaradas con parámetros
function sayYourAge(nombre, edad) {
  console.log(`${nombre} tiene ${edad} años`);
}

sayYourAge('José', 55);
sayYourAge('Neus', 27);
sayYourAge('Núria', 54);

console.log('____________________');

function sum(num1, num2) {
  console.log(`La suma de num1 + num2 es: ${num1 + num2}`);
}
sum(5, 8);
sum(10, 80);
console.log('____________________');

// Valores por defecto
function greet(name = 'Don sin nombre') {
  console.log(`Hola ${name}`);
}
greet('José');
greet();
console.log('____________________');

// Funciones expresadas (La función se recoge en una variable)
const sayGoodbye = function () {
  console.log('Adios a todos!');
};
sayGoodbye();
console.log('____________________');

// Funciones expresadas con parámetros
const nameYourJob = function (name, job) {
  console.log(`${name} trabaja de ${job}`);
};
nameYourJob('José', 'Albañil');
nameYourJob('Neus', 'Neuropsicóloga');
nameYourJob('Núria', 'Recepcionista');
console.log('____________________');

// Return
function multiply(num1, num2) {
  return `La multiplicación de num1 * num2 es: ${num1 * num2}`;
}

const multiplyResult = multiply(3, 5);
console.log(multiplyResult);

const multiplyResult2 = multiply(10, 4);
console.log(multiplyResult2);
