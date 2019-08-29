const User = require('../models/model-user')
const Bcrypt = require('../helpers/bcrypt')
const Jwt = require('../helpers/jwt')

class UserController {

    static register(req, res, next) {
        // console.log(req.body);
        let { name, email, password } = req.body

        User
            .create({
                name, email, password
            })
            .then(newUser => {
                res.status(201).json(newUser)
            })
            .catch(next)
    }

    static login(req, res, next) {
        console.log(req.body,'jjjjjj');
        let { email, password } = req.body

        User
            .findOne({ email })
            .then(user => {
                console.log(user,'<---- dari controller');
                let token = Jwt.createToken({ user })
                if (user) {
                    console.log(token);
                    res.status(200).json({
                        token,
                        id: user._id,
                        name: user.name,
                    });
                } else {
                    next({ status: 400, messages: 'email / password wrong!' })
                }
            })
            .catch(next)
        }
}

module.exports = UserController