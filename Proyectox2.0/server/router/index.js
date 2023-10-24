const express = require('express');
const router = express.Router();
const productos = require('../components/productos/router');

function routerApp(app) {
    app.use('/api/v1', router);
    app.use('/productos', productos)
}

module.exports = routerApp; 