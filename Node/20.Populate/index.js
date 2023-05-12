//Creamos servidor con express
const express = require ("express");
const dotenv = require("dotenv");
const connect = require ("./src/utils/db");
dotenv.config();

//Creamos el servidor web y conectamos la db
const PORT = process.env.PORT; 
const app = express();
connect();

//Decimos el tipo de servidor web que vamos a tener, estos dos parametros siempre son IGUAlES
//Siempre va a utilizar un json en el middleware para enviar los datos
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
//Next = middleware, se encarga de lanzar los errores
app.use(`*`, (req, res, next)=>{
    const error = new Error(`Route not found`);
    error.status= 404;
    next(error);
});

const calendarRoute = require ("./src/api/Calendar/route/calendar.route");
app.use("api/v1/calendar", calendarRoute)

//Escuchamos a escuchar el servidor web en su puerto correspondiente
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`)
})