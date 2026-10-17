// map() crea un nuevo array partiendo del original sin modificarlo
// Recorre el array original y le aplica la nueva funcionalidad que codifiques sobre el nuevo array.
// map(callback) recibe un callback

const numArray = [10, 20, 30];
const strArray = ['Hola', 'a', 'todos'];
const movieArray = [
  {
    title: 'El señor de los anillos',
    rating: 8.9,
  },
  {
    title: 'Harry Potter',
    rating: 7.2,
  },
];
console.log('numArray:', numArray);
console.log('strArray:', strArray);
console.table(movieArray);

const newNumArray = numArray.map((number) => {
  return number * 2;
});
console.log(newNumArray);

const newStrArray = strArray.map((word) => {
  return [word.toUpperCase() + '???', word.length];

  // return `${word.toUpperCase()} - Longitud: ${word.length}`;

  /* return {
    palabra: word.toUpperCase(),
    longitud: word.length
  };*/
});

console.log(newStrArray);

const newMovieArray = movieArray.map((movie) => {
  return {
    title: movie.title,
    isGood: movie.rating >= 8,
  };
});

console.table(newMovieArray);
