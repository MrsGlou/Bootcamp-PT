const http = require("http");

//Definimos el puerto del server
const PORT = 8080;

//Controlamos las peticiones
const requestHandle = (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    //Cabecera, envviar html por la respuesta
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<h1>Esto es una ruta con NODE</h1>`);
  } else if (req.url === "/users" && req.method === "GET") {
    //Vamos a decir las cabeceras con el tipo de elemento que vamos a enviar
    res.setHeader("Content-Type", "application/json");
    //Status de la respuesta
    res.writeHead(200);
    //Enviamos la info al cliente
    res.end(JSON.stringify({ name: "Peter", surname: "Parker", age: 23 }));
  }
};

//Creamos el servidor que contiene el manejador
const server = http.createServer(requestHandle);

//Escuchamos al servidor y lo ejecutamos
server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost${PORT}`);
});
