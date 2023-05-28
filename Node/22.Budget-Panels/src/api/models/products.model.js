const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['panel', 'inverter'], required: true },
    refProveedor: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    power: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
