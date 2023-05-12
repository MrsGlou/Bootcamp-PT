const mongoose = require("mongoose");
const Schema = mongoose.Schema

//Vamos a hacer la definición de datos mediante un schema
const CalendarSchema = new Schema (
    {
        date: {type:Date, require: true},
        description: {type:String, require: true},
        img: {type: String, require:true},
        events: [{type:mongoose.Types.ObjectId, ref: "Events"}]
    }, 
    {
        timestamps: true
    }
);

const Calendar = mongoose.model("Calendar", CalendarSchema);
module.exports = Calendar;