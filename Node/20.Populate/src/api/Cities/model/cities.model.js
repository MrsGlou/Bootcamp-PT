const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitysSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    place: { type: String, require: true },
    hour: { type: String, require: true },
    //Hay que ponerlo siempre como array para que se cree de primeras de esta manera
    day: [{ type: mongoose.Types.ObjectId, ref: "Calendar" }],
  },
  {
    timestamps: true,
  }
);

const Citys = mongoose.model("Citys", CitysSchema);
module.exports = Citys;
