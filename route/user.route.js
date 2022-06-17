const express = require('express');
const userRouter = express.Router();
const userController = require('../Controller/user.controller')

userRouter.post('/login', userController.login);

module.exports = userRouter