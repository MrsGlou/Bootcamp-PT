//Traemos expres
const express = require("express");

//Creamos el puerto
const PORT = 8080;

//Creamos servidor
const app = express();

//Escuchamos el servidor y le asociamos el puerto
app.listen(PORT, () => {
  console.log(`Server listening on port 🐱‍🚀 http://localhost:${PORT}`);
});
