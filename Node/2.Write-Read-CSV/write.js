const fs = require(`fs`);

const convertJsonToCsv = (jsonData) => {
  let csv = "";

  //Ponemos los encabezados
  let headers = Object.keys(jsonData[0]);
  csv += headers.join(",") + "\n";

  //Introducimos los datos de las filas
  jsonData.forEach((row) => {
    headers.forEach((header, index) => {
      index > 0 ? (csv += ",") : (csv += row[header]);
    });
    csv += "\n";
  });
  return csv;
};

//datos
let jsonData = [
  { name: "Andrea Pérez", age: 26, city: "Madrid" },
  { name: "Pepito García", age: 30, city: "London" },
];

//Pasamos JSON a CSV
let csvData = convertJsonToCsv(jsonData);

//Guardamos los datos
fs.writeFile("data.csv", csvData, (err) => {
  err
    ? console.error("Error al escribir archivo CSV: " + err)
    : console.log("Archivo CSV guardado con éxito.");
});
