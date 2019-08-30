// if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
    require('dotenv').config();
// }

const mongoose  = require('mongoose');
const express   = require('express');
const routes    = require('./routes/index');
const cors      = require('cors');

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_ATLAS, { useNewUrlParser: true })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

app.use((err, req, res, next) => {
    console.log(err);
    if(!err.status) {
        res.status(500).json(err)
    }
})


app.listen(port, function () {
    console.log(`listening on port port port ${port}`)
})

module.exports = app