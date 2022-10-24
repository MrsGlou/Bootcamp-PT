/*------------------------------------------------------
---------**Iteración #1: Interacción con el DOM**-------
------------------------------------------------------*/

//1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**

const recoverShowme = document.querySelector(".showme");
console.log(recoverShowme);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const recoverPillado = document.querySelector("#pillado");
console.log(recoverPillado);

//1.3 Usa querySelector para mostrar por consola todos los p
//Para mostrar "p" no hace falta . ni #
const recoverP = document.querySelectorAll("p");
console.log(recoverP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const recoverPokemon = document.querySelectorAll(".pokemon");
console.log(recoverPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const recoverData = document.querySelectorAll("[data-function = 'testMe']");
console.log(recoverData);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const recoverData3 = document.querySelectorAll("data-function = child");
console.log(recoverData3);