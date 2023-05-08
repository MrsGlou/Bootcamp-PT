//Para hacer un modelo nos traemos de primeras moongose y hacemos un schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creamos una constante con el objeto schema
const ArtistSchema = new Schema(
  //1-Obj: Recibe la definición de datos
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    genre: { type: String, required: true },
    age: { type: Number, required: false },
  },
  //2-Obj: Recibe el time stamp
  {
    timestamps: true,
  }
);

//1- nombre del modelo que queremos ponerle
//2- la definicion de datos que necesitamos
const Artist = mongoose.model("Artist", ArtistSchema);

module.export = Artist;
