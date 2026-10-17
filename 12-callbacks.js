// Un callback es una función que se le pasa por parámetro a otra función.

function a() {
  console.log('Función a');
}
console.log(a);

function b() {
  console.log('Función b');
}
console.log(b);

function c() {
  console.log('Función c');
}
console.log(c);

// Función callback

function exe(callback) {
  console.log('Función exe llama a la función...');
  callback();
}
exe(a);
exe(b);
exe(c);

// Ejemplo básico

function saludar() {
  console.log('Hola');
}

function ejecutar(callback) {
  callback(); // aquí se ejecuta la función que nos pasaron
}

ejecutar(saludar); // Hola

/*Fíjate en que pasamos saludar sin paréntesis. Con paréntesis (saludar()) la ejecutarías en ese momento y pasarías su resultado, no la función.*/

// Ejemplo práctico

function calculate(a, b, callback) {
  const result = callback(a, b); // el callback hace el cálculo
  console.log(`El resultado es ${result}`);
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

calculate(40, 20, sum);
calculate(5, 10, multiply);
calculate(50, 2, divide);
