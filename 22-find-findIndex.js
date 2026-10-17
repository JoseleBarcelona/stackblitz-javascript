const numArray = [10, 20, 30];
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

// find()
const foundNumber = numArray.find((num) => num > 10);
console.log(foundNumber);

const foundMovie = movieArray.find(
  (movie) => movie.title === 'El señor de los anillos'
);
console.log(foundMovie);

// findIndex()
const foundIndexNumber = numArray.findIndex((num) => num > 20);
console.log(foundIndexNumber);

const foundIndexMovie = movieArray.findIndex((movie) => movie.rating > 5);
console.log(foundIndexMovie);
