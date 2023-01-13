require('dotenv').config({path: '../.env'})
const express = require('express')
const cors = require('cors')
// const db = require('./db')
const morgan = require('morgan')
const routes = require('./routes/routes')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(routes)

const port = process.env.PORT || 8001
app.listen(port, () => {
    console.log(`Server has been started on post ${port}`)
})