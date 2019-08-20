const User = require('../models/model-user')
const Bcrypt = require('../helpers/bcrypt')
const Jwt = require('../helpers/jwt')

class UserController {

    static register(req, res, next) {

        let { name, email, password } = req.body

        User
            .create({
                name, email, password
            })
            .then(newUser => {
                res.status(201).json(newUser)
            })
            .catch(err => {
                console.log(err);
            })
    }

    static login(req, res, next) {
        // console.log(req.body);
        let { email, password } = req.body

        User
            .findOne({ email })
            .then(found => {
                // console.log(found);
                if (found) {
                    let access_token = Jwt.createToken(found)
                    res.status(200).json({
                        token: access_token,
                        id: found._id,
                        name: found.name,
                        email: found.email
                    });
                    console.log(access_token);
                } else {
                    next({ status: 400, messages: 'email/password wrong!' })

                }
            })
            .catch(err => {
                console.log(err);
            })
                

        }
}

module.exports = UserController