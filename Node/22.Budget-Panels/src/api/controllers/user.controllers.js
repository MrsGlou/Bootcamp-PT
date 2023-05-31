const User = require('../models/user.model');
//const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');
dotenv.config();

//----------- REGISTER --------------//

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    //Se connfigura nodemailer para enviar el codigo de confirmación al usuario.
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
      if (req.file) deleteImgCloudinary(catchImg);
      //llamamos al manejador de errores para que haga la ejecución
      return next(setError(409, 'This user already exist'));
    } else {
      try {
        const createUser = await newUser.save();
        createUser.password = null;

        //!! --------VAMOS A ENVIAR EL CORREO .------
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
      } catch (error) {
        return res.status(404).json(error.message);
      }
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(
      setError(error.code || 500, error.message || 'Failed create user')
    );
  }
};

//----------- VALIDATED NEW USER --------------//

const validatedNewUser = async (req, res, next) => {
  try {
    const emailSMTP = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const { email, confirmationCode } = req.body;
    const userExists = await User.findOne({ email });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailSMTP,
        pass: password,
      },
    });
    if (!userExists) {
      return res.status(404).json('User not found');
    } else {
      if (confirmationCode === userExists.confirmationCode) {
        //Buscamos el usuario y vemos que se ha actualizado correctamente
        try {
          await userExists.updateOne({ check: true });
          // hacemos un testeo de que este user se ha actualizado correctamente, hacemos un findOne
          const updateUser = await User.findOne({ email });

          // este finOne nos sirve para hacer un ternario que nos diga si la propiedad vale true o false
          return res.status(200).json({
            testCheckOk: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else {
        //Si el correo esta mal volvemos a enviarlo 
        const updateUser = await User.findOne({ email });
        const mailOptions = {
          from: emailSMTP,
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
          user: updateUser,
          confirmationCode: confirmationCode,
        });
      }
      //Tenemos que mirar si el codigo esta bien y validamos el usuario
    }
  } catch (error) {
    return next(setError(500, 'General error validated'));
  }
};

//----------- RESEND CODE CONIRMATION --------------//

module.exports = {
  register,
  validatedNewUser,
};
