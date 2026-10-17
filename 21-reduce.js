// reduce() crea un nuevo array partiendo de otro y obtiene un solo valor partiendo de cada uno de los elementos del array original.
// reduce(callback) se le pasa un callback.
// Su objetivo principal es reducir un array a un único valor (que puede ser un número, un string, un objeto o incluso otro array) aplicando una función acumuladora a cada uno de los elementos.
/* La idea básica es:
"Tengo muchos valores y quiero obtener un solo resultado a partir de ellos."*/

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(suma); // 10

const personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'Marta', edad: 25 },
];

const edades = personas.reduce((resultado, persona) => {
  resultado[persona.nombre] = persona.edad;
  return resultado;
}, {});

console.log(edades);

const frutas = [
  'manzana',
  'pera',
  'manzana',
  'platano',
  'platano',
  'pera',
  'platano',
];
const contador = frutas.reduce((resultado, fruta) => {
  resultado[fruta] = (resultado[fruta] || 0) + 1;
  return resultado;
}, {});

const addAge = personas.reduce((resultado, persona) => {
  resultado.push(persona.edad);
  return resultado;
}, []);

console.log(addAge);

const addName = personas.reduce((resultado, persona) => {
  resultado.push(persona.nombre);
  return resultado;
}, []);

console.log(addName);
