/*-----------------------------------------------------
---------**Iteración #1: Interacción con el DOM**------
-----------------------------------------------------*/
//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const list = document.createElement("ul");

for (const country of countries) {
  list.innerHTML += `<li>${country}</li>`;
}
document.body.appendChild(list);

//****1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeElement = document.querySelectorAll(".fn-remove-me");
document.body.removeChild(removeElement);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const list2 = document.createElement("ul");
//const div1 = document.querySelectorAll("[data-function='printHere']");
for (const car of cars) {
  list2.innerHTML += `<li>${car}</li>`;
}
document.body.appendChild(list2);
