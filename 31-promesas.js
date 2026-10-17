/*
Una promesa es un objeto que queda pendiente a que ciertos procesos terminen,
o bien se resuelven o bien se rechazan, nos permite gestionar javascript asíncrono.
*/

console.log('Promesas');

const condition = false;

function myFunction() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled();
      else rejected();
    }, 2000);
  });
}

myFunction() // Esta función recibe una promesa y la gestionamos con el .then en caso ok y .catch en caso error.
  .then(() => console.log('La promesa ha sido resuelta con status 200'))
  .catch(() => console.log('La promesa da error 404'));

function myFunction2() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled('La promesa ha sido resuelta con status 200');
      // Esta promesa devuelve directamente unos datos de una API.
      else rejected('La promesa da error 404');
    }, 4000);
  });
}

myFunction2()
  .then((response) => console.log(response)) // El .then recibe por parámetro la respuesta ok.
  .catch((error) => console.log(error));
