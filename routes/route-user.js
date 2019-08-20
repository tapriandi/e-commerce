const express = require('express');
// const controllerLogin = require('../controllers/controller-login');
const controllerUser = require('../controllers/controller-user');
const routes = express.Router()

// routes.get('/', controllerUser.list)
routes.post('/login', controllerUser.login)
routes.post('/register', controllerUser.register)
// routes.post('/googlesignin', controllerUser.signInGoogle)
// routes.get('/:todoId', controllerUser.findUserTodo)

module.exports = routes