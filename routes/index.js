const express = require('express');
const routes = express.Router();
// const todos = require('./router-todo')
const users = require('./route-user')
// const authentication = require('../midleware/authentication')

routes.use('/user', users)
// routes.use('/todos', authentication, todos)

routes.get('*', (req, res) => {
    res.status(404).json({msg: 'Page not found'})
})

module.exports = routes