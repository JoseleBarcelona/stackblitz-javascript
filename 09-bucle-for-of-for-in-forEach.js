// Bucle for of recorre los valores de un objeto iterable.
// Se usa normalmente con arrays, strings, Sets, Maps, etc.
const frutas = ['🍎', '🍌', '🍊'];

for (const fruta of frutas) {
  console.log(fruta);
}
console.log('______');
// Bucle for in recorre las propiedades/índices de un objeto.
// Recorre las claves (propiedades) de un objeto

for (const indice in frutas) {
  //Comportamiento en un array
  console.log(`Índice: ${indice}`);
}
console.log('______');

const persona = {
  nombre: 'Ana',
  edad: 25,
  ciudad: 'Barcelona',
};

for (const clave in persona) {
  //Comportamiento en un objeto
  console.log(clave, ':', persona[clave]);
}
console.log('______');

//Bucle forEach es un método de un iterable
frutas.forEach((product) => {
  console.log(product);
});
console.log('______');

// Break
for (let i = 0; i < 10; i++) {
  if (i === 4) break;
  console.log(i);
}
console.log('______');

// Continue
for (let i = 0; i < 10; i++) {
  if (i === 4 || i === 5 || i === 6) continue;
  console.log(i);
}
