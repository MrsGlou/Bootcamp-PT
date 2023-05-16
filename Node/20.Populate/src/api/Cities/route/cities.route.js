const express = require("express");
const Cities = require("../model/cities.model");
const Country = require("../../Country/model/country.model");

const router = express.Router();

//----------------------- POST -----------------//
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
        country.cities.push(newCity._id);

        //Actualizamos con el metodo de buscar por id y actualizar
        updateCountry = await Country.findByIdAndUpdate(
          req.params.idCountry,
          country
        );
      } catch (error) {
        return next(error);
      }

      return res.status(200).json({
        createCity: postNewCity,
        //Para que lo actualice antes de mandar la respuesta tenemos que hacer un await y asi nos manda el ob con el ultimo
        //Populate-> Lo que hace es tener acceso directo a los elementos metidos por id.
        updateCountry: await Country.findById(req.params.idCountry).populate(
          "cities"
        ),
      });
    }
  } catch (error) {
    return next(error);
  }
});

//----------------------- GET ALL -----------------//
router.get("/", async (req, res, next) => {
  try {
    //FIND -> sirve para traer todo o cosas en concreto.
    const citiesAll = await Cities.find().populate("country");
    if (citiesAll) {
      return res.status(200).json(citiesAll);
    } else {
      return res.status(404).json("Failed get all cities");
    }
  } catch (error) {
    return next(error);
  }
});

//----------------------- GET BY NAME -----------------//

// IMPORTANTE -- si tenemos varios get que reciben parametros hay que meterle un paso antes con un /*css*/
// para que no se confunda con el mismo controlador del mismo typo get que recibe un paramentro
// por eso el controlador de by Name lleva en el path /name/:name para que no se confunda con el
// con el controlar de getById que es un get y tiene y solo tiene el path "/:id"

router.get("/name/:name", async (req, res, next) => {
  try {
    //Destructuring de las cosnstantes que vienen por parametro
    const { name } = req.params;
    //no funciona como includes, debe ser extrictamente igual
    const cityByName = await Cities.find({ name }).populate("country");
    if (cityByName) {
      res.status(200).json(cityByName);
    } else {
      res.status(404).json("Failed get City by name");
    }
  } catch (error) {
    return next(error);
  }
});

//----------------------- GET BY ID -----------------//
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const cityById = await Cities.findById(id).populate("country");
    if (cityById) {
      res.status(200).json(cityById);
    } else {
      res.status(404).json("Failed get City by Id");
    }
  } catch (error) {
    return next(error);
  }
});

//----------------------- PATCH -----------------//
router.patch("/:id", async (req, res, next) => {
  try {
    await Cities.syncIndexes();
    const { id } = req.params;
    const updateCity = await Cities.findByIdAndUpdate(id, req.body);
    if (updateCity) {
      res.status(200).json(await Cities.findById(id));
    } else {
      res.status(404).json("Failed get city and update");
    }
  } catch (error) {
    return next(error);
  }
});

//----------------------- DELETE -----------------//
router.delete("/:id", async () => {
  try {
    const { id } = req.params;
    const deleteCity = await Cities.findByIdAndDelete(id);
    if (deleteCity) {
      //Tenemos que actualizar el Country para borrar esa city de el, para ello buscamos la city borrada
      await Country.updateMany({ $pull: { events: id } });

      return res.status(200).json(deleteCity);
    } else {
    }
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
