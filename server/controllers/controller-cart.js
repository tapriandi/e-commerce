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
      .find({ userId: req.params.id })
      .then(card => {
        res.status(200).json(card)
      })
      .catch(next)
  }

  static addToCart(req, res, next) {
    
    // console.log('<---- masuk controller cart');

    let found = {}
    let user = req.decoded.user._id

    // console.log(req.body.productId);

    Product
      .findOne({ _id: req.body.productId })
      .then(product => {
        
        found = product
        return product
      })
      .then(product =>{
        return Cart.findOne({ userId: user })
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
  };

  static deleteOne(req, res, next) {
    // Product
    //   .findOne({})
    Cart
      .findOneAndRemove({ // belum di cek di postman
        cart: req.params.id 
      })
      .then(cart => {
        res.status(200).json(cart)
      })
      .catch(next)
  };

  // static deleteAll(req, res, next) {
  //   Cart
  //     .findByIdAndDelete({
  //       _id: req.params.id
  //     })
  //     .then(cart => {
  //       res.status(200).json(cart)
  //     })
  //     .catch(next)
  // }
}

module.exports = ControllerCart