/*---------------------------------------------
------**Iteración #3: Calcular la suma**-------
---------------------------------------------*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(num) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

let sumaTotal = sumAll (numbers);
console.log(sumaTotal);