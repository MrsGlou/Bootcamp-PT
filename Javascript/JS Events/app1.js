/*-------------------------------------------------
---------**Iteración #1: Creando Events**----------
-------------------------------------------------*/

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const btn = document.getElementById("btnToClick").addEventListener("click", console.log("click"));

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector(".focus");
focus.addEventListener("focus", console.log("focus"))

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector(".value")
inputValue.addEventListener("value", console.log(inputValue.value));