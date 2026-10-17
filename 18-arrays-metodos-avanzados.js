// forEach: recibe un callback o sea una función por parámetro.

const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number, index) => {
  console.log(index, number);
});

// Las arrow function si solo tienen una linea se puede expresar así también.
numbers.forEach((number) => console.log(number));

const fruits = ['Manzana', 'Pera', 'Plátano'];
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

const movieArrays = [
  {
    title: 'El padrino',
    duration: 120,
  },
  {
    title: 'Acorralado',
    duration: 180,
  },
];

movieArrays.forEach((movie) => console.log(movie));
movieArrays.forEach((movie) => console.log(movie.title));

movieArrays.forEach((movie) => {
  if (movie.duration > 120) {
    console.log(movie.title);
  }
});
