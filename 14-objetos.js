const product = {
  name: 'Computer',
  price: 1200,
  isForSale: true,
};

console.log(`product es un ${typeof product}`);
console.log(product);

// Notación del punto (Se usa en el 99% de los casos)
console.log(`Esta ${product.name} cuesta ${product.price}€`);

// Notación del corchete (Se usa cuando se quiere almacenar una propiedad en una variable)
console.log(`Esta ${product['name']} cuesta ${product['price']}€`);

// Acceso a una propiedad a través de una variable
const key = 'isForSale';
console.log(product[key]);

// Añadir propiedades al objeto a través de la notación del punto
product.color = 'Blue';
console.log(product);

// Objetos con arrays y objetos
const items = {
  name: 'Zapato',
  price: 100,
  model: ['Nike', '5846', 'ref ad4g5r'],
  data: {
    seriesNumber: 'A78529852',
  },
};
console.log(
  `El número de serie es ${items.data.seriesNumber} y el modelo es ${items.model[0]}`
);

// Objetos que pueden tener objetos como propiedades
const calculator = {
  sum: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.sum(10, 5));
console.log(calculator.subtract(10, 3));
