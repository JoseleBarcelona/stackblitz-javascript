/*
== Igual doble (Evalua el valor)
=== Igual triple (Evalua el valor y el tipado)
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
! Niega la condición
&& Se tienen que cumplir todas las condiciones
|| Se tiene que cumplir una sola condición
*/

const num1 = 10;
const num2 = 20;
const condition = true;
const color = 'blue';

if (num1 >= num2 && condition) {
  console.log('La condición se cumple');
} else {
  console.log('la condición no se cumple');
}
if (num1 >= num2 || condition) {
  console.log('La condición se cumple');
} else {
  console.log('la condición no se cumple');
}
if ((num1 <= num2 || condition) && color == 'blue') {
  console.log('La condición se cumple');
} else {
  console.log('la condición no se cumple');
}

//== Igual doble (Evalua el valor)
//=== Igual triple (Evalua el valor y el tipado)

console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log('_____________________');

// Convertir a booleano con !! o ver un valor es true o false

console.log(Boolean(1));
console.log(Boolean('abc'));
console.log(Boolean(true));
console.log(Boolean([0, 1, 2]));
console.log(Boolean({ a: 1, b: 2, c: 3 }));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

console.log('_____________________');

console.log(!1); // Esto ! niega el true por lo que da false
console.log(!!1); // Esto !! niega dos veces por lo que da true
console.log(!0);
console.log(!!0);
