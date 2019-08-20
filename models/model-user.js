const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const Helper = require('../helper/helper')
// console.log(Helper);

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

}, { timestamps: true })

//hook
// userSchema.pre('save', function (next, done) {
//     this.password = Helper.hashPassword(this.password)
//     next()
// })

const User = mongoose.model('User', userSchema)

module.exports = User

