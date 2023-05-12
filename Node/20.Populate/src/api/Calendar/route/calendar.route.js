const express = require("express");
const Calendar = require("../model/calendar.model");

const router = express.Router();

//Cuando creamos una routa le pasamos dos cosas, la routa especifica que le quiero meter y el controlaror de la routa
router.post("/", async(req, res, next)=> {
    try {
        const newCalendarDay = new Calendar(req.body);
        const postCalendarDay = await newCalendarDay.save();
        return postCalendarDay
        ? res.status(200).json(postCalendarDay)
        : res.status(404).json("Error create Calendar");
    } catch (error) {
       return next(error);
    }
});

module.exports = router;