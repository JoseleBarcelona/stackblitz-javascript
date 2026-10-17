/* Las copias superficiales se hacen con el operador spread, el problema es que si el objeto tiene otro objeto anidado en lugar de ser un elemento primitivo, su comportamiento es el que se espera de un paso por referencia en lugar de un paso por valores, que es el comportamiento que se desearía en una copia, para poder alterar sus valores sin que afecten al objeto original.*/

// Las copias profundas se pueden hacer de dos maneras

// Manera antigua:

const data = {
  name: 'Carlos',
  age: 64,
  address: {
    street: 'Antoni Gaudí',
    number: 20,
  },
};

const copyData = JSON.parse(JSON.stringify(data));
copyData.age = 85;
copyData.address.street = 'Baldiri Comas';

console.log(data);
console.log(copyData);
console.log('_________________________________________________');

// Manera actual:

const copyCurrentData = structuredClone(data);
copyCurrentData.job = {
  category: 'Construction Manager',
  site: 'Tanatorio 251505',
  location: 'Badalona',
};
console.log(data);
console.log(copyCurrentData);
console.table(data);
console.table(copyCurrentData);
