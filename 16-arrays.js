// Arrays
const numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[3]);
console.log(`Número de elementos: ${numbers.length}`);
console.log(numbers[numbers.length - 1]);
console.log('________');

// Arrays vacios
const fruits = [];
fruits[0] = 'Apple';
fruits[1] = 'Orange';
fruits[2] = 'Pinaple';

console.log(fruits);

for (fruit of fruits) {
  console.log(fruit);
}
console.log('________');
for (fruit in fruits) {
  console.log(fruit);
}
console.log('________');
for (fruit in fruits) {
  console.log(fruits[fruit]);
}
console.log('________');
fruits.forEach((fruit) => {
  console.log(fruit);
});
console.log('________');

// Arrays de arrays (matriz) se usa para funciones matemáticas
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]);
console.log('________');

// Arrays de objetos
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
console.log(products[1]);
console.log(products[1].name);
console.log(products[1].price, products[1].isForSale);
console.log('________');

console.log(Object.keys(products[0]));
console.log(Object.keys(products[0])[1]);
console.log('________');
console.log(Object.values(products[0]));
console.log(Object.values(products[0])[1]);
