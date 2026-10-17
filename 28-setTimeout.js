// El método global setTimeout() establece un temporizador que ejecuta una función o una pieza de código específica una vez que expira el temporizador.
// setTimeout(callback ,time); recibe una función por parámetro que se ejecutará cuando hay transcurrido el tiempo del segundo parámetro.

setTimeout(() => {
  console.log('Hola');
}, 2000);

let number = 0;

setTimeout(() => {
  number = 100;
  console.log('Al finalizar el temporizador del setTimeout', number);
}, 3000);

console.log('Después de los setTimeout', number);
