const express = require("express")
const cors = require("cors")
const app = express()
var morgan = require('morgan')
const chats = require("./data/data")
require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')

connectDB();
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
    res.send('MERN CHAT APP IS RUNNING..')
})

app.listen(port, () => {
    console.log(`MERN CHAT APP IS RUNNING ON APP ${port}`.yellow.bold)
})