const http = require("http");

//Creamos servidor

const server = http.createServer((req, res) => {
  //configuramos la respuesta del servidor
  res.statusCode = 200; //Respuesta valida
  res.setHeader("Content-Type", "text/plain"); //Cabecera
  res.end("Que tarde se hace");
});

//Escuchamos el servidor y lo levantamos. El 8080 va a ser el puerto que recibe el localhost

server.listen(8080, () => {
  console.log("server listening on port http://localhost:8080");
});

// npm run dev
