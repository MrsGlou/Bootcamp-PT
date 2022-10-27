/*--------------------------------------------------
---------**Iteración #2: Modificando el DOM**-------
--------------------------------------------------*/

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv1 = document.createElement("div");
let newP = document.createElement("p");

newDiv1.appendChild(newP);
document.body.appendChild(newDiv1);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv2 = document.createElement("div");
let i = 0;
while (i < 6) {
  newDiv2.innerHTML += `<p>Me han insertado dinamicamente</p>`;
  i++;
}
document.body.appendChild(newDiv2);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP1 = document.createElement("p");
let newText = document.createTextNode("Soy dinamico");
newP1.appendChild(newText);
document.body.appendChild(newP1);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const recoverH2 = document.querySelector(".fn-insert-here");
let newText1 = document.createTextNode("Wubba Lubba dub dub");
recoverH2.appendChild(newText1);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
//Creamos un <ul>
const list = document.createElement("ul");
//Añadimos a la lista las aplicaciones con el li
for (const app of apps) {
  list.innerHTML += `<li>${app}</li>`;
}
//metemos la lista como un hijo del body
document.body.appendChild(list);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElement = document.querySelectorAll(".fn-remove-me");

//Hacemos un for para recorrer todos los elementos que queremos eliminar que estan dentro del body
removeElement.forEach((Element) => {
  document.body.removeChild(Element);
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
let newP2 = document.createElement("p");
newP2.textContent = "Voy en medio!";

//Llamamos al primer div para poder trabajar sobre el
const div1 = document.querySelector("div");

//Insertamos elemento despues de lo que lo que hemos llamdado para trabajar
div1.insertAdjacentElement("afterend", newP2);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const div3 = document.querySelectorAll(".fn-insert-here");
console.log(div3)
for (let i = 1; i < div3.length; i++) {
    div.innerHTML += `<p>Voy dentro!</p>`; 
}
/*
for (const div of div3) {
    div.innerHTML += `<p>Voy dentro!</p>`;
  };*/