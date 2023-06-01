const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const {
  register,
  validatedNewUser,
  resendCode,
  login,
  forgotPassword,
} = require('../controllers/user.controllers');
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('image'), register);
UserRoutes.post('/validated', validatedNewUser);
UserRoutes.post('/resend', resendCode);
UserRoutes.post('/login', login);
UserRoutes.post('/forgotpassword', forgotPassword);

module.exports = UserRoutes;
