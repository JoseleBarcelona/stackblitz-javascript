const fruits = ['Apple', 'Orange'];

console.log(fruits);

fruits[2] = 'Watermelon'; // Agregar elementos de esta manera no es recomendable porque si es una app dinámica, tienes que estar calculando contínuamente el índice.
console.log(fruits);

// La manera recomendada es usando métodos de las arrays
fruits.push('Pinaple'); // Agrega un elemento al final del array
console.log(fruits);

fruits.pop(); // Elimina el último elemento
console.log(fruits);

fruits.unshift('Strawberry'); // Añade un elemento al principio
console.log(fruits);

fruits.shift();
console.log(fruits); // Elimina el primer elemento

console.log(fruits.indexOf('Apple')); // Te dice cuál es el índice del elemento
console.log(fruits.includes('Apple')); // Te dice si el elemento existe en el array
console.log(fruits.includes('Cherry'));
console.log(fruits.join('-')); // Une los elementos de un array con el caracter que le pasas como argumento
console.log(typeof fruits.join('-'));

const elements = ['hola', 5, true];

console.log(elements.toString());
console.log(typeof elements.toString());

const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

const sliced = numbers.slice(1, 4); // Crea un nuevo array con los valores que están comprendidos entre los indices indicados.
console.log(sliced);

numbers.splice(2, 1, 22, 24, 26, 28); // Elimina el o los elementos que pasamos por parámetro e incluye nuevos o no, dependiendo de lo que se necesite. NO ES RECOMENDABLE USAR SPLICE PORQUE MODIFICA EL ARRAY ORIGINAL
console.log(numbers);

// Un método mejor para no modificar el array original y crear uno diferente partiendo del original es el método toSpliced(). Las buenas prácticas recomiendan no modificar los arrays originales, recomiendan trabajar sobre copias.
const spliced = numbers.toSpliced(2, 4, 25);
console.log(spliced);
console.log(numbers);

// Ejemplo de añadir un objeto nuevo dentro de un array de objetos.
const products = [
  {
    name: 'Ordenador',
    price: 1200,
    isForSale: true,
  },
  {
    name: 'Teclado',
    price: 50,
    isForSale: true,
  },
  {
    name: 'Ratón',
    price: 12,
    isForSale: false,
  },
];
console.log(products);

const monitor = {
  name: 'Monitor',
  price: 650,
  isForSale: true,
};

products.push(monitor);
console.log(products);
