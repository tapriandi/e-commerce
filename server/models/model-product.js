const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps:true})

const Product = mongoose.model('product', productSchema)
module.exports = Product