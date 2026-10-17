// Función callback sin parámetros
function a(callback) {
  callback();
}

function b() {
  console.log('Función b');
}

// Llamada a una función declarada a través de un callback
a(b);

// llamada a una función anónima a través de un callback
a(() => {
  console.log('Función anónima');
});

// Función callback con parámetros
function c(callback) {
  const p1 = 'Parámetro 1';
  const p2 = 'Parámetro 2';
  callback(p1, p2);
}

function d(param1, param2) {
  console.log(param1, param2);
}

// Llamada a una función declarada a través de un callback
c(d);
c((param1, param2) => {
  console.log(param1, param2);
});

// Ejemplo de repetición de iteraciones

function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}
repeat(5, (i) => {
  console.log(`Iteración: ${i}`);
});

// Ejemplo con arrays
const numbers = [10, 20, 30];
numbers.forEach((number) => {
  console.log(number);
});
