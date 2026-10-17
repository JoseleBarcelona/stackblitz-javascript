/*
setInterval() es muy parecido a setTimeout(), pero hay una diferencia fundamental:
- setTimeout() ejecuta una función una sola vez, después de esperar un tiempo.
- setInterval() ejecuta una función repetidamente, cada cierto intervalo de tiempo, hasta que lo cancelas.
1. Cómo funciona setInterval()
*/
const intervalo = setInterval(() => {
  console.log('¡Hola!');
}, 1000);

setTimeout(() => {
  clearInterval(intervalo);
  console.log('Intervalo detenido');
}, 7000);

// clearInterval(id)	Cancela un setInterval() activo.

setTimeout(() => {
  let number = 0;
  const intervalID = setInterval(() => {
    number++;
    console.log('Time', number);
    if (number >= 5) {
      clearInterval(intervalID);
      setTimeout(() => {
        console.log('Contador finalizado!');
      }, 1000);
    }
  }, 1000);
}, 8000);
