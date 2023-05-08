//Para hacer un modelo nos traemos de primeras moongose y hacemos un schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creamos una constante con el objeto schema
const AlbumsSchema = new Schema(
  //1-Obj: Recibe la definición de datos
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: false },
  },
  //2-Obj: Recibe el time stamp
  {
    timestamps: true,
  }
);

//1- nombre del modelo que queremos ponerle
//2- la definicion de datos que necesitamos
const Albums = mongoose.model("Albums", AlbumsSchema);

module.export = Albums;
