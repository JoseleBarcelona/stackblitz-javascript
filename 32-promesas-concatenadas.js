// Promesas concatenadas

console.log('Promesas');

const condition = true;

function myFunction() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled();
      else rejected();
    }, 2000);
  });
}
function myFunction2() {
  return new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (condition) fulfilled();
      else rejected();
    }, 2000);
  });
}

myFunction()
  .then(() => {
    console.log('Petición 1 resuelta');
    return myFunction2();
  })
  .then(() => console.log('Petición 2 resuelta'))
  .catch(() => console.log('Error'));
