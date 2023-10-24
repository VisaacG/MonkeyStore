const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index.js')

router.get('/', (req, res) => {
console.log(req)
    controller.getProducts()
        .then((productsList) => response.success(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
})

module.exports = router;