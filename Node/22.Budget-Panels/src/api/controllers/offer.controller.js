const Offer = require('../models/offer.model');
const User = require('../models/user.model');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');

dotenv.config();

//------------------ POST -----------------------//
const createOffer = async (req, res, next) => {
  try {
    await Offer.syncIndexes();
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    const price =
      req.body.panels * 148 +
      req.body.inverter * 500 +
      req.body.installerPrice +
      (req.body.maintenance == 'true' ? 0 : 140);
    console.log(price, typeof req.body.maintenance);

    //Instanciamos
    const newOffer = new Offer({
      ...req.body,
      user: req.user._id,
      totalPrice: price,
    });
    try {
      const postNewOffer = await newOffer.save();

      if (postNewOffer) {
        const user = await User.findById(req.user._id);
        let updateUser;

        try {
          user.offers.push(newOffer._id);
          updateUser = await User.findByIdAndUpdate(req.user._id, user);
        } catch (error) {
          return next(error);
        }

        const mailOptions = {
          from: email,
          to: req.body.clientEmail,
          subject: 'Panels Offer',
          text: `Your offer price is ${price} and the number of panels are ${req.body.panels}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        return res.status(200).json({
          offer: postNewOffer,
          updateUser: await User.findById(req.auth).populate('offer'),
        });
      }
    } catch (error) {
      return res.status(404).json(error.message);
    }
  } catch (error) {
    return next(
      setError(500 || error.code, error.message || 'General error create offer')
    );
  }
};

//------------------ GET ALL --------------------//
const getAllOffer = async (req, res, next) => {
  try {
    const offersAll = await Offer.find();
    if (offersAll) {
      return res.status(200).json(offersAll);
    } else {
      return res.status(404).json('Failed get all offers');
    }
  } catch (error) {
    return next(
      setError(
        500 || error.code,
        error.message || 'General error get all offers'
      )
    );
  }
};

//------------------ GET BY ID --------------------//
const getOfferByID = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const offersAll = await Offer.find(_id);
    if (offersAll) {
      return res.status(200).json(offersAll);
    } else {
      return res.status(404).json('Failed get all offers');
    }
  } catch (error) {
    return next(
      setError(
        500 || error.code,
        error.message || 'General error get all offers'
      )
    );
  }
};

//------------------ UPDATE OFFER --------------------//
const updateOffer = async (req, res, next) => {
  const { id } = req.params;
  try {
    //Actualizamos los indexes de los elementos unicos
    await Offer.syncIndexes();
    //Instanciamos la nueva oferta
    const patchOffer = new Offer(req.body);
    //Las cosas que no quiero que se modifiquen las cojo de la req
    patchOffer._id = id;
    patchOffer.user = req.body.user;
    console.log(patchOffer);
    //Buscamos el id y actualizamos.
    try {
      await Offer.findByIdAndUpdate(id, patchOffer);

      //----TEST RUNTIME ----//
      //Buscamos usuario actualizado y las keys en el body
      const updateOffer = await Offer.findById(id);
      const updateKeys = Object.keys(req.body);
      //Variable para guardar el login
      const testUpdate = [];
      //Recorremos keys y comparamos
      updateKeys.forEach((item) => {
        if (updateOffer[item] == req.body[item]) {
          testUpdate.push({
            [item]: true,
          });
        } else {
          testUpdate.push({
            [item]: false,
          });
        }
      });

      return res.status(200).json({
        testUpdate,
      });
    } catch (error) {
      return res.status(404).json('Fallo en el update');
    }
  } catch (error) {
    return next(
      setError(500 || error.code, error.message || 'General error update offer')
    );
  }
};

//------------------ DELETE OFFER --------------------//
const deleteOffer = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Offer.findByIdAndDelete(_id);
    if (await Offer.findById(_id)) {
      return res.status(404).json('Dont delete');
    } else {
      await User.updateMany({ offer: _id }, { $pull: { offer: _id } });
      return res.status(200).json('Ok delete');
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createOffer,
  getAllOffer,
  getOfferByID,
  updateOffer,
  deleteOffer,
};
