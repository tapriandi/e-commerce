const Jwt = require('./jwt');
// const Bcrypt = require('./bcrypt')
const Product = require('../models/model-product');
const User = require('../models/model-user');

function authentication(req, res, next) {

    try {

        let decoded = Jwt.verifyJwt(req.headers.token)
        req.decoded = decoded
        next()
        // User
        //     .findOne({
        //         email: decoded.email
        //     })
        //     .then(user => {
        //         req.decoded = decoded,
        //             req.headers.is = decoded.id
        //         next()
        //     })
        //     .catch(err => {
        //         res.status(401).json({
        //             error: 'Autentication failed'
        //         })
        //     })
    }
    catch (err) {
        next(err)
    }

}

function authorize(err, req, res, next) {

    Product
        .findOne({
            _id: req.params.id,
        })
        .then(product => {
            if (product) {
                console.log(req.decoded.id, 'dari helper auth');
                if (product.userId == req.decoded._id) {
                    next()
                } else {
                    res.status(401).json({ error: 'forbidden access' })
                }
            } else {
                res.status(403).json({ error: 'product not found' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { authorize, authentication }