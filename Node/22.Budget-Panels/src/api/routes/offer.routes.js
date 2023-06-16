const express = require('express');
const {
  createOffer,
  getAllOffer,
  updateOffer,
  deleteOffer,
} = require('../controllers/offer.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const OfferRoutes = express.Router();

OfferRoutes.post('/createoffer', [isAuth], createOffer);
OfferRoutes.get('/getoffers', [isAuth], getAllOffer);
OfferRoutes.patch('/update/update/:id', [isAuth], updateOffer);
OfferRoutes.delete('/delete', [isAuth], deleteOffer);

module.exports = OfferRoutes;
