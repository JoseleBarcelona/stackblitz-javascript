// Otras maneras de construir objetos más avanzadas

// A través del  constructor Object(), crea un objeto genérico.
const movie = new Object();

// Añadir atributos
movie.title = 'El señor de los anillos';
movie.duration = 180;
movie.year = 2001;

console.log(movie);
console.log(
  `${movie.title} dura ${movie.duration} minutos y es del año ${movie.year}`
);

// A través de funciones constructoras.
function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

// creamos un objeto de tipo Person
const user = new Person('José', 'Guerrero', 55);
console.log(user);
console.log(`${user.name} ${user.lastName} tiene ${user.age} años`);

// A través de clases que es lo más común actualmente
class Animal {
  constructor(animal, enviroment, age) {
    this.animal = animal;
    this.enviroment = enviroment;
    this.age = age;
  }
}

// Creamos un objeto de tipo Animal
const tiger = new Animal('tiger', 'earth', 5);
console.log(tiger);
console.log(
  `This ${tiger.animal} is an ${tiger.enviroment} animal and it is ${tiger.age} years old`
);

// Metodos de los objetos
console.log(Object.keys(tiger));
console.log(Object.values(tiger));
console.log(Object.entries(tiger));
console.log(Object.keys(tiger).length);
console.log(tiger.hasOwnProperty('age'));
console.log(tiger.hasOwnProperty('color'));
