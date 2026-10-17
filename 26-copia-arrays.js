// Máneras de copiar arrays.

const numbers = [1, 2, 3, 4, 5];

//  Copia con el método slice(). Admíte parámetros, consultar MDN.
const copy1 = numbers.slice();
copy1.push(10);
console.log(numbers);
console.log(copy1);

// Copia con el operador spread ...
const copy2 = [...numbers];
copy2.push(20);
console.log(numbers);
console.log(copy2);

// Con el método map(). Recibe un callback.
const copy3 = numbers.map((num) => num);
copy3.push(30);
console.log(numbers);
console.log(copy3);

/*  [ 1, 2, 3, 4, 5 ]
    [ 1, 2, 3, 4, 5, 10 ]
    [ 1, 2, 3, 4, 5 ]
    [ 1, 2, 3, 4, 5, 20 ]
    [ 1, 2, 3, 4, 5 ]
    [ 1, 2, 3, 4, 5, 30 ] 
*/

// Copia de arrays de objetos. Al ser paso por referencia debemos hacer copias profundas.

const objectArrray = [{ num: 1 }, { num: 2 }];

// Método tradicional de hacer una copia profunda
const deepCopy = JSON.parse(JSON.stringify(objectArrray));
deepCopy[0].num = 10;
console.log(objectArrray, deepCopy);

/*
Array [ {…}, {…} ]
0: Object { num: 1 }
1: Object { num: 2 }

Array [ {…}, {…} ]
0: Object { num: 10 }
1: Object { num: 2 }
*/

// Método actual de hacer una copia profunda con structuredClone()
const cloneCopy = structuredClone(objectArrray);
cloneCopy[0].num = 20;
console.log(objectArrray, cloneCopy);
/*
Array [ {…}, {…} ]
0: Object { num: 1 }
1: Object { num: 2 }

Array [ {…}, {…} ]
0: Object { num: 20 }
1: Object { num: 2 }
*/
