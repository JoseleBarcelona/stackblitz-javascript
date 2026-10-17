// (Variables primitivas) Paso por valor guarda un lugar en la memoria para cada variable que se crea.

a = 10;
b = a;
console.log(`La variable a vale: ${a}`);
console.log(`La variable b vale: ${b}`);

a = 20;
console.log(`La variable a vale: ${a}`);
console.log(`La variable b vale: ${b}`);

// (Objetos) Paso por referencia. La referencia es una dirección que apunta a otro lugar de la memoria para extraer los datos de ese lugar. El objeto obj1 es la dirección que apunta a otro lugar donde se encuentra el valor del objeto.

const obj1 = { name: 'Josele' };
const obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1.name = 'Núriola';
console.log(obj1);
console.log(obj2);
