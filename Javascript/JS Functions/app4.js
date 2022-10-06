/*-------------------------------------------------
------**Iteración #4: Calcular el promedio**-------
-------------------------------------------------*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let promedio = average(numbers) / numbers.length;
console.log(promedio);
