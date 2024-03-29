//Creamos servidor con express
const express = require("express");
const dotenv = require("dotenv");
const connect = require("./src/utils/db");
dotenv.config();

//Creamos el servidor web y conectamos la db
const PORT = process.env.PORT;
const app = express();
connect();

//Configuramos las cors
const cors = require("cors");

app.use(cors());
app.use((req, res, next) => {
  //Creamos las cabeceras de nuestro back para controlar el acceso a la api
  res.header("Access-Control-Allow-Origen", "*");
  //Puede haber autorizaciones mediante request con contenido concreto
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  //Verbos persmitidos en los metodos
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

  next();
});

//Decimos el tipo de servidor web que vamos a tener, estos dos parametros siempre son IGUAlES
//Siempre va a utilizar un json en el middleware para enviar los datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
//Next = middleware, se encarga de lanzar los errores
const citiesRouter = require("./src/api/Cities/route/cities.route");
const countryRouter = require("./src/api/Country/route/Country.route");
app.use("/api/v1/country", countryRouter);
app.use("/api/v1/cities", citiesRouter);

app.use(`*`, (req, res, next) => {
  const error = new Error(`Route not found`);
  error.status = 404;
  next(error);
});

//Escuchamos a escuchar el servidor web en su puerto correspondiente
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
