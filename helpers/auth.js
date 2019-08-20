const Jwt = require('./jwt');
const Bcrypt = require('./bcrypt')
// const Product = require('../models/model-product');

const { User } = require('../models');

function authentication(req, res, next) {

    try {

        let decoded = Jwt.verifyJwt(req.headers.token)

        User
            .findOne({
                email: decoded.email
            })
            .then(user => {
                req.decoded = decoded,
                    req.headers.is = decoded.id
                next()
            })
            .catch(err => {
                res.status(401).json({
                    error: 'Autentication failed'
                })
            })
    }
    catch (err) {
        res.status(500).json(err)
    }

}

function authorize(err, req, res, next) {

    Article
        .findOne({
            _id: req.params.id,
            owner: req.params.id
        })
        .then(article => {
            if (article) {
                if (article.owner == req.decoded._id) {
                    next()
                } else {
                    res.status(401).json({ error: 'Forbident access' })
                }
            } else {
                res.status(403).json({ error: 'article not found' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

}

module.exports = { authorize, authentication }