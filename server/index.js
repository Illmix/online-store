require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express()

app.use(cors())
app.use(fileUpload({}))
app.use(express.json())
app.use(express.static(path.resolve('static')))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`server works on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

