const express = require('express');
const router = express.Router();

function routerApp(app) {
    app.use('/api/v1', router);
    // app.use('/dashboard', dashboard);
}

module.exports = routerApp;