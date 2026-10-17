// Arrow function

const sayHello = () => {
  console.log('Hola Mundo!');
};
sayHello();

// Arrow function con parámetro

const sayGoodbye = (str) => {
  console.log(str);
};
sayGoodbye('Hasta luego Lucas');

// Arrow function con return

const divide = (num1, num2) => {
  return num1 / num2;
};
console.log(divide(10, 2));
console.log(divide(10, 3));

//  Arrow function abreviada cuando solo tiene un parámetro

const jobName = (str) => str;
console.log(jobName('José'));
