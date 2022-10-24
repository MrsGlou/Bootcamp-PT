/*---------------------------------------------------
-------**Iteración #4: Métodos findArrayIndex**------
---------------------------------------------------*/

const bichos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(bicho) {
  if (bichos.includes(bicho) === true) {
    console.log(
      `La palabra ${bicho} ocupa la posicion ${bichos.indexOf(bicho)}`
    );
  } else {
    console.log(`La palabra ${bicho} no ocupa ninguna posición`);
  }
}
findArrayIndex("Carol");
findArrayIndex("Mosquito");