import "./style.css";

const COLOR_PALETTE = {
  "#D1D5DE": "Light Gray",
  "#B8336A": "Maroon X 11",
  "#302F4D": "Space Cadet",
  "#120D31": "Russian Violet",
  "#037971": "Pine Green",
};

//Declarar las variables a nivel global y no por scope
const addOptionsToColorPicker = () => {
  //Rercuperamos el select
  const colorPickerSelect = document.querySelector("#color-picker");

  //Convertimos el objeto en array y vamos a generar las opciones de los colores
  Object.keys(COLOR_PALETTE).forEach((color) => {
    //Creamos el elemento option en el HTML
    const option = document.createElement("option");
    //Introduciomos en el elemento el valor de color
    //Option tiene dos cosas, el valor y el texto.
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    //Metemos las opciones al select con un append
    colorPickerSelect.append(option);
  }); 
};

//Cambio del color de fondo por medio de un evento
const addEventListenerToColorPicker = () => {
  //Recuperamos 2 partes del HTML por medio del query
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");

  colorPickerSelect.addEventListener("change", (event) => {
    //Almacenamos el código de color, el valor (#fff) del elemento que hay seleccionado
    const newColor = event.target.value;
    //Aplicamos al brackground el código del color seleccionado
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
