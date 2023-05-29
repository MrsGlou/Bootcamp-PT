const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { register } = require('../controllers/user.controllers');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('image'), register);

module.exports = UserRoutes;
