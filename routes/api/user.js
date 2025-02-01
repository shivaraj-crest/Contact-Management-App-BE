
const express = require('express');
const userController = require('../../controller/userController');
const auth = require('../../middlewear/authMiddlewear');

const routes = express.Router()

routes.post('/register', userController.register);
routes.post('/login', userController.login);



module.exports = routes;