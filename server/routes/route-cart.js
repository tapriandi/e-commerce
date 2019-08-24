const express = require('express');
const route = express.Router();
const controllerCart = require('../controllers/controller-cart');
const { authentication } = require("../helpers/auth")

route.get('/', controllerCart.getAll)
route.get('/:id', controllerCart.getOne)
// route.post('/', controllerCart.create)
route.post('/:id', authentication, controllerCart.addToCart)
route.delete('/:id', controllerCart.deleteOne)
route.delete('/', controllerCart.deleteAll)

module.exports = route