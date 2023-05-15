const express = require("express");
const Country = require("../model/country.model");

const router = express.Router();

//Cuando creamos una routa le pasamos dos cosas, la routa especifica que le quiero meter y el controlaror de la routa
router.post("/", async (req, res, next) => {
  try {
    const newCountry = new Country(req.body);
    const postCountry = await newCountry.save();
    return postCountry
      ? res.status(200).json(postCountry)
      : res.status(404).json("Error create Country");
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
