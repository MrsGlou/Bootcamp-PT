const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');
dotenv.config();

//----------- REGISTER --------------//

const register = async (req, res, next) => {
  try {
    await User.syncIndexes();
    //Se connfigura nodemailer para enviar el codigo de confirmación al usuario.
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      services: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    //Creamos el codigo
    const confirmationCode = Math.floor(
      Math.random() * (99999 - 50000) + 50000
    );

    //Hacemos un nuevo usuario y guardamos el codigo junto con la req body
    const newUser = new User({ ...req.body, confirmationCode });

    if (req.file) {
      //path es lo que contiene la url de cloudinary
      newUser.image = req.file.path;
    } else {
      newUser.image = 'https://cdn-icons-png.flaticon.com/512/16/16363.png';
    }

    //Tenemso que buscarlo en la bbdd
    const userExists = await User.findOne({
      email: newUser.email,
    });

    if (userExists) {
      //llamamos al manejador de errores para que haga la ejecución
      return next(setError(409, 'This user already exist'));
    } else {
      const createUser = await newUser.save();
      //para que no se muetre la contraseña que ha puesto el usuario lo ponemos en null
      createUser.password = null;

      //Enviamos codigo de verificación
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Code confirmation',
        text: `Your code is ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(201).json({
        user: createUser,
        confirmationCode: confirmationCode,
      });
    }
  } catch (error) {
    return next(setError(500, error.message || 'failed create user'));
  }
};

module.exports = {
  register,
};
