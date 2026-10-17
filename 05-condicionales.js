// Condicionales if, else, else if.
let age = 70;

if (age >= 65) {
  console.log('Tienes la edad para jubilarte');
} else if (age >= 18) {
  console.log('Eres mayor de edad');
  console.log('Tienes edad para conducir');
  console.log('Tienes edad votar');
} else {
  console.log('Eres menor de edad');
}

// Condicionales switch
let day = 'domingo';

switch (day) {
  case 'lunes':
    console.log(`Hoy es ${day}`);
    break;
  case 'martes':
    console.log(`Hoy es ${day}`);
    break;
  case 'miercoles':
    console.log(`Hoy es ${day}`);
    break;
  case 'jueves':
    console.log(`Hoy es ${day}`);
    break;
  case 'viernes':
    console.log(`Hoy es ${day}`);
    break;
  case 'sabado':
    console.log(`Hoy es ${day}`);
    break;
  case 'domingo':
    console.log(`Hoy es ${day}`);
    break;
  default:
    console.log('Has ingresado un día erroneo, comprueba la sintaxis.');
    break;
}

/*Condicionales ternarios
-------------------------
Modo if else*/
let condition = false;

if (condition) {
  console.log('La condición se cumple');
} else {
  console.log('La condición no se cumple');
}

// Modo ternario
condition ? console.log('Se cumple') : console.log('No se cumple');
console.log(`Condition es de tipo ${typeof condition}`);

// Booleans
// Truthy = 1234, "abcd", [], {}, true
// Falsy = 0, "", null, undefined, false
