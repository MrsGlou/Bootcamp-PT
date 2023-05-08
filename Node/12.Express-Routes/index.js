const express = require("express");

//Creamos la contanste del puerto y el server
const PORT = 8080;
const app = express();

//Definimos el routing de la app
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.get("/movies", (req, res) => {
  const movies = ["Dune", "Hunger Games", "Doraemon", "Harry Potter"];
  const person = {
    name: "Peter",
    surname: "Parker",
  };
  res.send(person);
});

//Se configura el path principal
app.use("/api/v1", router);

//arrancamos el server con listen
app.listen(PORT, () => {
  console.log(
    `Server listening on port 🐱‍🚀 http://localhost:${PORT}/api/v1 `
  );
});
