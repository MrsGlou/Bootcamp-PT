const express = require("express");
const Country = require("../model/country.model");
const Cities = require("../../Cities/model/cities.model");

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

//----------------------- DELETE -----------------//
router.delete("/:id", async(req, res, next) => {
  try {
    const {id} = req.params;
    const deleteCountry = await Country.findByIdAndDelete(id);
    if (deleteCountry) {
      deleteCountry.cities.forEach(async(cities, index) =>{
        await Cities.deleteMany({_id:cities});
      });
      return res.status(200).json({
        finally: "Ok, operation delete",
        deleteCountry,
        test: await Country.findById(id)=== null? "Test ok": "error in second step",
      })
    } else {
      return res.status(404).json("Error in first step");
    }
  } catch (error) {
    return next(error)
    
  }
})
module.exports = router;
