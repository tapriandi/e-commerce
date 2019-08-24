const jwt = require('jsonwebtoken');

function createToken(userPayload) {
    return jwt.sign(userPayload, process.env.SECRET_TOKEN, { expiresIn: '1d' })
}

function verifyJwt(token) {
    return jwt.verify(token, process.env.SECRET_TOKEN)
}

module.exports = { createToken, verifyJwt }