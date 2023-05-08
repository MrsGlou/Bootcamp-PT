//Para hacer una semilla necesitamos mongoose, el modelo de datos y dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Albums = require("../models/albums.model");

dotenv.config();

//Creamos el objeto con los datos que queremos inyectar en la db
const albumDataSet = [
  {
    title: "Consentia",
    cover:
      "https://i.pinimg.com/originals/fa/33/4b/fa334b94583703f073b9552b518c69b7.jpg",
    artist: "Dellafuente",
    year: 2015,
  },
  {
    title: "Valentina",
    cover:
      "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/96/38/4b/96384b42-4b3e-93b0-d985-26894151bdba/8425845928777.jpg/1200x1200bb.jpg",
    artist: "31 FAM",
    year: 2019,
  },
  {
    title: "Mala mujer",
    cover:
      "https://cdn.smehost.net/sonymusices-45pressprod/wp-content/uploads/2018/07/MALA-MUJER_Baja.jpg",
    artist: "C. Tangana",
    year: 2017,
  },
  {
    title: "1932",
    cover: "https://i1.sndcdn.com/artworks-cAiBqefvedTd-0-t500x500.jpg",
    artist: "La maravillosa orquesta del alcohol",
    year: 2013,
  },
];

//Convertir la info en obj del modelo recorriendo el array
const albumsDocuments = albumDataSet.map((album) => new Albums(album));

//Conectamos con mongoDB mediante mongoose, recibe dos parametros:
//1.Uri
//2.Los datos
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const seedPlant = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      //Busca la coleccion completa de albums en la DB
      const AllAlbums = await Albums.find();

      if (AllAlbums.lenght) {
        await Albums.collection.drop();
        console.log("db Borrada ❌");
      }
    })
    .catch((error) => console.log("Error borrando DB", error))
    .then(async () => {
      //Vamos a insertar los diferentes modelos creados en el albumsDocuments
      await Albums.insertMany(albumsDocuments);
      console.log("Coleccion creada 🎈");
    })
    .catch((error) =>
      console.log("No se ha creado la coleccion de datos ❌", error)
    )
    .finally(() => mongoose.disconnect());
};

module.exports = seedPlant;
