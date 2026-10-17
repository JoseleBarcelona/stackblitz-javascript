// Spread operator se crea con ...
// Usos:

console.log(...'¡hola amigos!'); //¡ h o l a   a m i g o s !

const movies = ['Lady halcón', 'Los Goonies', 'La historia interminable'];
console.log(...movies); //Lady halcón Los Goonies La historia interminable

const bestMovies = ['Acorralado', 'El Último Samurai', 'Dirty Dancing'];
console.log(...bestMovies); //Acorralado El Último Samurai Dirty Dancing

const newMovies = [...movies, ...bestMovies];
console.log(newMovies); //Array(6) [ "Lady halcón", "Los Goonies", "La historia interminable", "Acorralado", "El Último Samurai", "Dirty Dancing" ]

newMovies.push('Break Dance');
console.log(newMovies); //Array(7) [ "Lady halcón", "Los Goonies", "La historia interminable", "Acorralado", "El Último Samurai", "Dirty Dancing", "Break Dance" ]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

console.log(obj1); //Object { a: 1, b: 2 }
console.log(obj2); //Object { c: 3, d: 4 }

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); //Object { a: 1, b: 2, c: 3, d: 4 }

const fruits = {
  a: 'apple',
  b: 'orange',
};

const vegetables = {
  c: 'vegetable',
  d: 'cucumber',
};

const AddFruits = { ...fruits, ...vegetables };
console.log(AddFruits); //Object { a: "apple", b: "orange", c: "vegetable", d: "cucumber" }

const user = { id: 1 };
const info1 = { name: 'José' };
const info2 = { city: 'Barcelona' };

const completo = { ...user, ...info1, ...info2 };
console.log(completo); // Object { id: 1, name: "José", city: "Barcelona" }

console.table(newMovies);
console.table(obj3);
console.table(AddFruits);
console.table(completo);
