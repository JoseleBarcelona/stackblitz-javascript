// Destructuring es como el desempaquetado en python
/* Se trata de guardar en variables individuales los elementos de un objeto o un array
replicando su estructura en las variables individuales*/

// Destructuring con un array

const movies = ['Lady Halcón', 'Acorralado', 'El último samurai'];
console.log(movies);

const [movie1, , movie3] = movies;
console.log(movie1, movie3);
/*
Array(3) [ "Lady Halcón", "Acorralado", "El último samurai" ]
0: "Lady Halcón"
1: "Acorralado"
2: "El último samurai"

Lady Halcón El último samurai
*/

// Destructuring con un objeto

const worker = {
  name: 'José',
  age: 55,
  address: {
    street: 'Baldiri Aleu',
    number: 7,
    name: 'Núria',
  },
};
console.log(worker);
const {
  name,
  age,
  address: { street, number, name: workerName }, // A name damos un alias para que no haya conflicto con la constante declarada anteriormente con la misma clave 'name'.
} = worker;

console.log(name, age, street, number, workerName);

/*
Object { name: "José", age: 55, address: {…} }
address: Object { street: "Baldiri Aleu", number: 7, name: "Núria" }
age: 55
name: "José"

José 55 Baldiri Aleu 7 Núria
*/
