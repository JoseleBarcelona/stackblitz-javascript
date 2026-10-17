// fetch() nos permite obtener información a partir de fuentes externas (Consultas a API por ejemplo).
// Se apunta a un endpoint (url específica de una API).
// fetch() es un método que nos va a devolver una promesa.
// Es la manera moderna de consumir una API

// Manera clásica con el .then, .catch.

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) // parsea el cuerpo de la respuesta (texto JSON) y lo convierte en un objeto o array de JavaScript para que pueda entenderlo el navegador.
  .then((users) => {
    console.log('===== Con .then =====');
    console.log(users); //Una se haya ejecutado la promesa, decimos qué queremos hacer con ella, como por ejemplo un console.log().
  })
  .catch(() => console.log('Error'));

// Manera actual con el async-await.

async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Esperamos a que el servidor responda.
    const users = await response.json(); // Esperamos a que el cuerpo de la respuesta se convierta en un array de objetos.
    console.log('===== Con async/await =====');
    console.log(users); // Una vez tenemos los datos, hacemos lo que queramos con ellos.
  } catch (error) {
    console.log('Error');
  }
}

obtenerUsuarios();

/*
1. Comprobar response.ok

Es lo más importante. fetch solo rechaza la promesa si falla la red, no con un 404 o un 500. En esos casos tu código intentaría hacer response.json() sobre una respuesta de error y mostraría algo inesperado en lugar de caer en el .catch:
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json(); // Parsea el cuerpo de la respuesta (JSON) a un array de objetos.
  })
  .then((users) => {
    console.log('===== Con .then y comprobación de status ok =====');
    console.log(users);
  }) // Aquí ya tenemos los datos listos para usar.
  .catch((error) => console.error('Error:', error.message));

// 1. Comprobar response.ok

async function obtenerUsuariosOk() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const users = await response.json();
    console.log('===== Con async/await con comprobación de status ok=====');
    console.log(users);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

obtenerUsuariosOk();
