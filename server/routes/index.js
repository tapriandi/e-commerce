const express = require('express');
const route = express.Router();
const products = require('./route-product')
const users = require('./route-user')
const carts = require('./route-cart');
const { authentication } = require('../helpers/auth')

route.use('/user', users)
route.use('/product', authentication, products)
route.use('/cart', carts)

route.get('*', (req, res) => {
    res.status(404).json({msg: 'Page not found'})
})

module.exports = route