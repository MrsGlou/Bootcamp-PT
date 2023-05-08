const fs = require("fs");

const avengers = [
  {
    name: "SpiderMan",
    power: 70,
  },
  {
    name: "Dr.Strange",
    power: 80,
  },
  {
    name: "Hulk",
    power: 110,
  },
];

//Transformamos el array a un JSON a tipo string
const avengersJSON = JSON.stringify(avengers);

//Creamos el archivo people.json y el call back avisa cuando termina la escritura
// (Archivo a crear, el JSON tipo string que creemos, callback)
fs.writeFile("avengers.json", avengersJSON, () => {
  console.log("avengers.json created!");
});

//Se crea el JSON con el array que le hemos pasado
