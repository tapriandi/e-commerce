// if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
    require('dotenv').config();
// }

const mongoose  = require('mongoose');
const express   = require('express');
const routes    = require('./routes');
const cors      = require('cors');

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(`mongodb://localhost:27017/e-commerce`, { useNewUrlParser: true })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(port, function () {
    console.log(`listening on port port port ${port}`)
})

module.exports = app