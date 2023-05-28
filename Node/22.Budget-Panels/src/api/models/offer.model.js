const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferSchema = new Schema(
  {
    name: { type: String, required: true },
    panels: { type: Number, min: 6, max: 30, required: true },
    inverter: { type: Number, min: 3, max: 15, required: true },
    structure: {
      type: String,
      enum: ['coplanar', 'autolastrada', 'suelo', 'inclinada'],
      required: true,
    },
    maintenance: { type: Boolean, default: true, required: true },
    installerPrice: { type: Number, required: true },
    IVA: { type: String, enum: ['10%', '21%'], required: true },
    discount: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    clientEmail: { type: String, required: true },
    panlesType: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    ],
    inverterType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    user: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ],
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.model('Offer', OfferSchema);
module.exports = Offer;
