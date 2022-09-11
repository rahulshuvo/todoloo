const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const port = process.env.PORT

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/notes', require('./routes/noteRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
