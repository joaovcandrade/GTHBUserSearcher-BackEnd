const express = require('express');
const search =  require('./Controller/search');
const routes = express.Router();

routes.post('/name', search.name);

module.exports = routes;