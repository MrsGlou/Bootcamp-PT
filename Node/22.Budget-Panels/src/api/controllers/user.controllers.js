const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');
const { generateToken } = require('../../utils/getToken');
dotenv.config();

//------------------ REGISTER -----------------//

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
    const { email, confirmationCode } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(404).json('User not found');
    } else {
      if (confirmationCode === userExists.confirmationCode) {
        //Buscamos el usuario y vemos que se ha actualizado correctamente
        try {
          await userExists.updateOne({ validated: true });
          //Miramos que se ha acutalizado correctamente
          const updateUser = await User.findOne({ email });

          // este finOne nos sirve para hacer un ternario que nos diga si la propiedad vale true o false
          return res.status(200).json({
            testValidatedOk: !!updateUser.validated,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else {
        await User.findByIdAndDelete(userExists._id);
        // borramos la imagen
        deleteImgCloudinary(userExists.image);
        // devolvemos un 200 con el test de ver si el delete se ha hecho correctamente
        return res.status(200).json({
          userExists,
          check: false,
          delete: (await User.findById(userExists._id))
            ? 'error delete user'
            : 'ok delete user',
        });
      }
    }
  } catch (error) {
    return next(setError(500, 'General error validated'));
  }
};

//--------- RESEND CODE CONFIRMATION ------------//
const resendCode = async (req, res, next) => {
  try {
    //Configuramos nodemailer
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Code confirmation',
        text: `Your code is ${userExists.confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({ resend: true });
        }
      });
    } else {
      return res.status(404).json('User not found');
    }
  } catch (error) {
    return next(setError(500, error.message || 'General error resend code'));
  }
};

//------------------- LOGIN --------------------//
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    //Si no hay usuario -> 404- User not found
    if (!user) {
      return res.status(404).json('User no found');
    } else {
      //Si hay usuario miramos que las contraseñas sean las mismas
      if (bcrypt.compareSync(password, user.password)) {
        //Si son correctas generamos token
        const token = generateToken(user._id, email);

        // devolvemos el user auth y el token
        return res.status(200).json({
          user: {
            email,
            _id: user._id,
          },
          token,
        });
      } else {
        // si la contraseña no esta correcta enviamos un 404 con el invalid password
        return res.status(404).json('invalid password');
      }
    }
  } catch (error) {
    return next(
      setError(500 || error.code, error.message || 'General error login')
    );
  }
};

module.exports = {
  register,
  validatedNewUser,
  resendCode,
  login,
};
