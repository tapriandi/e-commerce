const express = require('express');
const controllerUser = require('../controllers/controller-user');
const routes = express.Router()

routes.post('/login', controllerUser.login)
routes.post('/register', controllerUser.register)
// routes.post('/googlesignin', controllerUser.signInGoogle)

module.exports = routes