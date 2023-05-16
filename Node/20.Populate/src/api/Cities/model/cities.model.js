const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitiesSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    visit: { type: String, enum:["visitada", "no visitada"], require: true },
    //Hay que ponerlo siempre como array para que se cree de primeras de esta manera
    country: [{ type: mongoose.Types.ObjectId, ref: "Country" }],
  },
  {
    timestamps: true,
  }
);

const Cities = mongoose.model("Cities", CitiesSchema);
module.exports = Cities;
