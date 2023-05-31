const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const {
  register,
  validatedNewUser,
  resendCode,
  login,
} = require('../controllers/user.controllers');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('image'), register);
UserRoutes.post('/validated', validatedNewUser);
UserRoutes.post('/resend', resendCode);
UserRoutes.post('/login', login);

module.exports = UserRoutes;
