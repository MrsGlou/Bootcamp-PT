const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Vamos a hacer la definición de datos mediante un schema
const CountrySchema = new Schema(
  {
    name: { type: String, require: true },
    capital: { type: String, require: true },
    language: { type: String, require: true },
    cities: [{ type: mongoose.Types.ObjectId, ref: "Cities" }],
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", CountrySchema);
module.exports = Country;
