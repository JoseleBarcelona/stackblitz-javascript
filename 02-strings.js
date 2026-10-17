// String con comillas dobles
let doubleQuoteStr = 'String con comillas "dobles"';
console.log(doubleQuoteStr);

// String con comillas simples
let singleQuoteStr = "String con comillas 'simples'";
console.log(singleQuoteStr);

// String con comillas con la \ de escape
let escapeStr =
  "'String' con \"barra de escape\" para poder poner más 'comillas'";
console.log(escapeStr);

// String con saltos de line \n
let lineBreak = 'Esto es un:\n Salto de linea';
console.log(lineBreak);

// String con bactick `` (respeta el formato que le hemos dado en el código javascript y admite variables)
let backTickStr = `Esto 
es un 

string con 
        backtick guardando
           el formato`;
console.log(backTickStr);

// String con backtick con variable
const greeting = 'hola';
console.log(`${greeting}, ${greeting} y ${greeting} a todos de nuevo`);

// Concatenar strings son el signo +
console.log(
  'El saludo al ver una persona por primera vez es decir: ' + greeting
);

// Métodos y propiedades
let goodBye = 'Adios, adios, adios, amigos!!';

console.log('La longitud de la despedida es de;', goodBye.length, 'caracteres');
console.log(goodBye.toUpperCase());
console.log(goodBye.includes('a'));
console.log(goodBye.includes('hola'));
console.log(goodBye.replace('adios', 'leches')); //Reemplaza la primera coincidendicia que encuentra
console.log(goodBye.replaceAll('adios', 'leches')); //Reemplaza todas las coincidencias
console.log(goodBye.toLowerCase().replaceAll('adios', 'leches')); //Aplica 2 métodos seguidos.
