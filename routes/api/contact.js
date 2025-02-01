
const express = require('express');
const contactController = require('../../controller/contactController');
const auth = require('../../middlewear/authMiddlewear');

const routes = express.Router();

routes.post('/create', auth, contactController.createContact);
routes.get('/get', auth, contactController.getContact);
routes.put('/update', auth, contactController.updateContact);
routes.delete('/delete', auth, contactController.deleteContact);


module.exports = routes;
