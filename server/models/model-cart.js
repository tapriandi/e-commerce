const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    default: 'unpaid'
  }
},{timestamps:true})

const Cart = mongoose.model('cart', cartSchema)
module.exports = Cart