const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('../helpers/bcrypt')


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [4, 'minimal 4 karakter']
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'minimal 4 karakter']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (email) {
                return new Promise(function (resolve, reject) {
                    User.findOne({
                        email
                    })
                        .then(data => {
                            if (data) {
                                resolve(false)
                            } else {
                                resolve(true)
                            }
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
            },
            message: props => `${props.value} belum terdaftar`
        }
    }

}, { timestamps: false })

//hook
userSchema.pre('save', function (next, done) {
    this.password = bcrypt.hashPassword(this.password)
    next()
})

const User = mongoose.model('user', userSchema)
module.exports = User
