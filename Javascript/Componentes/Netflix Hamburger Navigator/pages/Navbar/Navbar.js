import "./Navbar.css";
import { createHome } from "../Home/Home";
import { LISTNAV } from "../../data/InfoNav";

export const createNav = () => {
  let index = 0;
  for (let clave in LISTNAV) {
    index++;

    // EN FUNCION DEL TIPO LLAMAMOS A DOS FUNCIONES DIFERENTES
    if (typeof LISTNAV[clave] === "string") {
      pintarLista(clave, LISTNAV[clave], index);
    } else {
      pintarSub(clave, LISTNAV[clave], index);
    }
    addListenersNav();
  }
};

/// ---------- PINTA LOS LI SIN SUBINDICE -------------
const pintarLista = (item, url, index) => {
  // URL  lo utilizaremos cuando le metamos en donde queremos navegar
  const lista = document.querySelector('.list')
  lista.innerHTML += `
  <li class = '${index}'>${item}</li>
  `
}

/// ---------- PINTA LOS LI CON SUBINDICE -------------
const pintarSub = (item, url, index) => {
  // URL  serian los elementos subindice del li
  const lista = document.querySelector(".list");

  lista.innerHTML += `
  <li class = '${index}'>${item}
    <ul class= 'ul${index}'>
    </ul>
  </li>
  `;
   //creamos el nombre del elemento a apuntar en una constante
   const apuntar = `.ul${index}`
   const ulSub = document.querySelector(apuntar)
   //url recordar es el elemento con los objetos subindice
   for (let clave in url) {
     ulSub.innerHTML += `
     <li>${clave}</li>`
   }
};

const addListenersNav = () => {
  const close_btn = document.querySelector(".close-btn");
  const nav = document.querySelectorAll(".nav");

  close_btn.addEventListener("click", () => {
    nav.forEach((nav_el) => nav_el.classList.remove("visible"));
    createHome();
  });
};
