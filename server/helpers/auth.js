const Jwt = require('./jwt');
const Product = require('../models/model-product');

function authentication(req, res, next) {

    try {
        let decoded = Jwt.verifyJwt(req.headers.token)
        req.decoded = decoded
        next();
    }
    catch (err) {
        next(err)
    }

}

function authorize(err, req, res, next) {
    console.log('masuk auth');
    Product
        .findOne({
            _id: req.params.id,
        })
        .then(product => {
            console.log('masuk next <-------------');
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