/*
La función clearTimeout() sirve para cancelar una ejecución programada con setTimeout() antes de que llegue el momento de ejecutarse.
La idea es sencilla: programas una acción para dentro de unos segundos, pero si algo cambia de aquí a entonces, puedes cancelar esa acción.
*/
// 1. Ejemplo básico

const temporizador = setTimeout(() => {
  console.log('¡Hola!');
}, 3000);

console.log('Temporizador programado');
console.log('Índice del setTimeout', temporizador);

// Cancelamos la ejecución
clearTimeout(temporizador);

/*
En este caso, "¡Hola!" nunca se mostrará, porque cancelamos el temporizador antes de que pasen los 3 segundos.
- setTimeout() programa una acción.
- clearTimeout() cancela esa acción.
- temporizador es el identificador que devuelve setTimeout().
2. ¿Para qué sirve en la práctica?
Imagina que tienes un buscador que realiza una petición mientras escribes.
Sin clearTimeout()
Escribes «c» → petición
Escribes «ca» → petición
Escribes «casa» → petición

Se pueden realizar muchas peticiones innecesarias.

Con clearTimeout()
Escribes «c» → programa una petición
Escribes «ca» → cancela la anterior
Escribes «casa» → cancela la anterior
Esperas 300 ms → realiza una sola petición

Esto se conoce como debounce: esperar a que el usuario deje de escribir antes de ejecutar una acción.
*/

let timeoutId;

function buscar(texto) {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    console.log('Buscando:', texto);
    // Aquí realizarías la petición a la API.
  }, 300);
}
buscar('Hola que tal!');

/*
Cada vez que llamas a buscar(), cancelas la búsqueda pendiente y programas otra. Solo se ejecutará la última si dejas de escribir durante 300 milisegundos.
3. ¿Qué pasa si el temporizador ya se ha ejecutado?
Si la función ya se ha ejecutado, llamar a clearTimeout() no deshace lo que ha ocurrido. Tampoco detiene una función que ya está ejecutándose.
Además, si el temporizador ya se ha cancelado, volver a cancelarlo no produce ningún problema.
En resumen: clearTimeout() es útil cuando una acción programada puede dejar de ser necesaria antes de ejecutarse. Es especialmente habitual en buscadores, autoguardado, validaciones de formularios, animaciones e interfaces web interactivas
*/
