/*-----------------------------------------
-------**Iteración #6: Función swap**------
-----------------------------------------*/

const futbol = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(futbol, a, b) {
    //Con una variable auxiliar hacemos el cambio de valores.
  let aux = futbol[a];
  futbol[a] = futbol[b];
  futbol[b] = aux;
  return futbol;

}

console.log(futbol);
swap(futbol, 0, 3);
console.log(futbol);
