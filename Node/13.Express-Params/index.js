const expres = require("express");

const app = express();
const router = express.Router();
const PORT = 8080;

//ROUTING

//Query -> Parametros opcionales
router.get("/name", (req, res) => {
  const id = req.query.id;
  res.send(`La query es ${id}`);
  //Es un parametro que es opcional y que no rompe la ejecucion del controlador
  // para acceder a el valor se introduce en el path completo de la siguiente forma:
  // http://localhost:8080/name?id=125234646242567
  /// primero ?
  /// segundo el nombre del query
  /// tercero el = con el valor
});

//Params -> Son obligatorios sino rompe la ejecución o no hace match con la ruta
