// filter() proporciona un nuevo array partiendo de otro, filtrado según una condición pasada sin que afecte al arrray original.
// filter(callback) recibe un callback.

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

const newNumArray = numArray.filter((number) => {
  return number < 25;
});
console.log(newNumArray);

const newStrArray = strArray.filter((word) => {
  return word.length > 3;
});
console.log(newStrArray);

const newMovieArray = movieArray.filter((movie) => {
  return movie.rating >= 7.5;
});
console.table(newMovieArray);
