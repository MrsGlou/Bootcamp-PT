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
const deleteElement = document.querySelector(".fn-remove-me");
document.body.removeChild(deleteElement);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const div1 = document.querySelector('[data-function="printHere"]');
const list2 = document.createElement("ul");
div1.appendChild(list2);

for (const car of cars) {
  list2.innerHTML += `<li>${car}</li>`;
}

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.

const countries1 = [
  { title: "China", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "España", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Portugal", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Brasil", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Italia", imgUrl: "https://picsum.photos/300/200?random=5" },
];
let list3 = document.createElement("ul");
const div2 = document.createElement("div");

countries1.forEach((element) => {
  const div2 = document.createElement("div");
  div2.innerHTML += `<h4>${element.title}</h4><img src=${element.imgUrl}/>`;
  let list4 = document.createElement("li");
  list3.appendChild(list4);
  list4.appendChild(div2);
});

document.body.appendChild(list3);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la lista.
const btn = document.createElement("button");
let newText = document.createTextNode("Pulsame");
btn.appendChild(newText);
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  list3.removeChild(list3.lastChild);
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.