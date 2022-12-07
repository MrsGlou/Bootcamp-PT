/*-------------------------------------------
---------**Iteración #1: Fetch**-------------
-------------------------------------------*/

//1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io/?name=michael")
  .then((res) => res.json())
  .then((data) => {
    console.log(`Age: ${data.age}, count ${data.count}, name: ${data.name}`);
  });

//2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

//2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

//2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.
const newBtn = document.createElement("button");
const input = document.querySelector("#input-btn");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch(`https://api.nationalize.io/?name=${input.value}`)
    .then((res) => res.json())
    .then(({ country: countries, name }) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>El nombre ${name} tiene un ${countries[0].probability} porciento de ser ${countries[0].country_id} y un ${countries[0].probability} de ser ${countries[1].country_id}.</p>
        `;

      newBtn.className = "delete-parraf";
      newBtn.innerHTML = "X";
      document.body.appendChild(div);
      div.appendChild(button);
      input.value = "";
    });
});



document.body.appendChild(newBtn);
newBtn.addEventListener("click", (evt) => {
  div.remove();
});
