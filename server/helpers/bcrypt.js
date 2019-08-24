const bcrypt = require('bcryptjs');

function hashPassword(password) {
    return bcrypt.hashSync(password, 10)
}

function comparePass(password, passwordDB) {
    return bcrypt.compareSync(password, passwordDB)
}

module.exports = { hashPassword, comparePass }