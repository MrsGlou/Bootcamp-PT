const express = require("express");
const Cities = require("../model/cities.model");
const Country = require("../../Country/model/country.model");

const router = express.Router();

//-----------------------POST -----------------//
//Recibimos por parametro el id del country para poder introducir eventos en el
router.post("/:idCountry", async (req, res, next) => {
  try {
    //Actualizamos los index (elementos unicos en el elemento schema del model) y se actualiza al momento
    await Cities.syncIndexes();
    const newCity = new Cities(req.body);
    const postNewCity = await newCity.save();

    if (postNewCity) {
      const country = await Country.findById(req.params.idCountry);
      //Lo guardamos con scope global
      let updateCountry;
      try {
        //Puseamos al array el id del evento creado y guardado
        country.events.push(newCity._id);

        //Actualizamos con el metodo de buscar por id y actualizar
        updateCountry = await Country.findByIdAndUpdate(
          req.params.idCountry,
          country
        );
      } catch (error) {
        return next(error);
      }

      return res.status(200).json({
        createEvent: postNewCity,
        //Para que lo actualice antes de mandar la respuesta tenemos que hacer un await y asi nos manda el ob con el ultimo
        //Populate-> Lo que hace es tener acceso directo a los elementos metidos por id.
        updateCalendar: await Country.findById(req.params.idCountry).populate(
          "cities"
        ),
      });
    }
  } catch (error) {
    return next(error);
  }
});

//-----------------------GET ALL -----------------//
router.get("/", async (req, res, next) => {
  try {
    const citiesAll = await Cities.find();
    return res.status(200).json(eventsAll);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
