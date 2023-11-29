const express = require('express')
const cors = require('cors')
require('dotenv').config()

const ICE = require('./routes/ICE')
const Exchange = require('./routes/Exchange-data')

const app = express()

app.use(cors())
app.use(ICE)
app.use(Exchange)


app.listen(process.env.PORT, () => {
    console.log(`This server is running on port ${process.env.PORT}`);
})