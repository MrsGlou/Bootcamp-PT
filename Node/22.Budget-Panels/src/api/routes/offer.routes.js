const express = require('express');
const {
  createOffer,
  getAllOffer,
  update,
} = require('../controllers/offer.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const OfferRoutes = express.Router();

OfferRoutes.post('/createoffer', [isAuth], createOffer);
OfferRoutes.get('/getoffers', [isAuth], getAllOffer);
OfferRoutes.patch('/update/:id', [isAuth], update);

module.exports = OfferRoutes;
