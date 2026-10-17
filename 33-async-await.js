// Promesas gestionadas con async-await.

const condition = true;

function myFunction() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled('Petición 1 código 200');
      else rejected('Error 404');
    }, 2000);
  });
}
function myFunction2() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled('Petición 2 código 200');
      else rejected('Error 404');
    }, 2000);
  });
}

// Ejemplo de funciones asíncronas concatenadas
// myFunction()
//   .then(() => {
//     console.log('Petición 1 resuelta');
//     return myFunction2();
//   })
//   .then(() => console.log('Petición 2 resuelta'))
//   .catch(() => console.log('Error'));

async function handlePromises() {
  try {
    response = await myFunction();
    console.log(response);
    response2 = await myFunction2();
    console.log(response2);
  } catch (error) {
    console.log(error);
  }
}
handlePromises();
