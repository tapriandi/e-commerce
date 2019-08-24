const Cart = require('../models/model-cart');
const Product = require('../models/model-product');

class ControllerCart {

  static getAll(req, res, next) {
    // console.log('masuk controller get all');
    Cart
      .find()
      .then(carts => {
        // console.log(carts);
        res.status(200).json(carts)
      })
      .catch(next)
  }
  static getOne(req, res, next) {
    Cart
      .findById({ _id: req.params.id })
      .then(card => {
        res.status(200).json(card)
      })
      .catch(next)
  }
  static create(req, res, next) {
    // console.log(object);
  }
  static addToCart(req, res, next) {
    
    console.log('masuk add chart');
    
    let found = {}
    let user = req.decoded.user._id
    
    console.log(req.params.id);

    Product
      .findOne({ _id: req.params.id })
      .then(product => {
        
        found = product
        return product

        // Cart
        //   .findOne({ userId: user })
        //   .then(card => {

        //     if (!card) {
        //       Cart.create(found)
        //         .then(product => {
        //           console.log(product,'<--------------');
        //         })
        //         .catch(next)

        //     } else {

        //       Cart.update({_id: user }, {$push:{cart: found}})
        //         .then(cart => {
        //           console.log(cart ,'<==================');
        //         })
        //         .catch(next)
        //     }
        //   })
        //   .catch(next)
      })
      .then(product =>{
        return Cart.findOne({userId: user})
      })
      .then(cart =>{
        if(!cart){
          var newCart = new Cart({
            userId: user,
            status: "unpaid",
            cart: [found._id]
          })
          return newCart.save()
        } else {
          cart.cart.push(found._id)
          return cart.save()
        }

      })
      .then(cart=>{
        res.status(200).json(cart)
      })
      .catch(next)
  }

  static deleteOne(req, res, next) { }
  static deleteAll(req, res, next) { }
}

module.exports = ControllerCart