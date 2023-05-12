const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Schema = mongoose.Schema;

const EventsSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    place: { type: String, require: true },
    hour: { type: String, require: true },
    //Hay que ponerlo siempre como array para que se cree de primeras de esta manera
    day: [{type:mongoose.Types.ObjectId, ref :"Calendar"}], 
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events",EventsSchema);
module.exports = Events;