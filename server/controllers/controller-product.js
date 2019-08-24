const Product = require('../models/model-product');

class ControllerProduct {

    static find(req, res, next){

        // const query = req.query ? req.query : ''

        Product
            .find({
                // 'name': new RegExp(query, 'i')
            })
            .then(products => {
                // console.log('---> ',product);
                res.status(200).json(products)
            })
            .catch(next)
    }

    static getOne(req, res, next){
        
        Product
            .findById(req.params.id)
            .then(product => {
                res.status(200).json(product)
            })
            .catch(next)
            
    }

    static create(req, res, next){
        let { name, price, description, stock, userId } = req.body
        const image = req.file ? req.file.cloudStoragePublicUrl : ''

        Product
            .create({
                name, description, price, image, stock, userId
            })
            .then(product => {
                // newProduct = {product, image}
                // console.log(product);
                res.status(201).json(product)
            })
            .catch(next)
    }

    static update(req, res, next){
        // console.log('masuk update', req.body);
        const { name, price, stock, description } = req.body
        
        let productUpdate = {
            name, price, stock, description
        }
        
        if (req.file) productUpdate.image = req.file.cloudStoragePublicUrl
        
        Product
            .findByIdAndUpdate(
                {_id: req.params.id},
                productUpdate,
                {new: true, runValidators: true}
            )
            .then(product => {
                res.status(200).json(product)
            })
            .catch(next)
    }

    static delete(req, res, next){

        Product
            .findByIdAndDelete({
                _id: req.params.id
            })
            .then(product => {
                if (product) {
                    res.status(200).json({product, msg: 'berhasil delete product'})
                }
                else {
                    res.status(400).json({ error: 'product not found'})
                }
            })
            .catch(next)
    }
}

module.exports = ControllerProduct