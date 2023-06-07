const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const {
  register,
  validatedNewUser,
  resendCode,
  login,
  forgotPassword,
  sendPassword,
  changePassword,
  update,
} = require('../controllers/user.controllers');
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('image'), register);
UserRoutes.post('/validated', validatedNewUser);
UserRoutes.post('/resend', resendCode);
UserRoutes.post('/login', login);
UserRoutes.get('/forgotpassword', forgotPassword);
UserRoutes.patch('/changepassword', [isAuth], changePassword);
UserRoutes.patch(
  '/update/update',
  [isAuthAdmin],
  upload.single('image'),
  update
);

//----Redirect
UserRoutes.get('/forgotpassword/sendpassword/:id', sendPassword);

module.exports = UserRoutes;
