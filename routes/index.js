const express = require('express');

const userRoutes = require('./api/user');
const contactRoutes = require('./api/contact');




const routes = express.Router();

routes.use('/user', userRoutes)
routes.use('/contact', contactRoutes)
module.exports = routes;