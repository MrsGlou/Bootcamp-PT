const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, 'Email not valid'],
      unique: true,
    },
    password: {
      type: String,
      validate: [validator.isStrongPassword, 'Password not valid'],
      minlength: [8, 'Min 8 characters'],
      required: true,
    },
    rol: { type: String, enum: ['admin', 'basic'], required: true },
    image: { type: String },
    confirmationCode: { type: Number, required: true },
    validated: { type: Boolean, default: false },
    offers: { type: mongoose.Schema.Types.ObjectId, ref: 'Offer' },
  },
  {
    timestamps: true,
  }
);

//Hacemos un presave encriptando la contraseña
UserSchema.pre('save', async function (next) {
  try {
    //nivel de encriptación no mas de 10
    this.password = await bcrypt.hash(this.password, 10);
    //next vacio para  que continue
    next();
  } catch (error) {
    next('Error hashing password', error);
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
