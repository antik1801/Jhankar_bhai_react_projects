const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const chats = require("./data/data")
var morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')


app.use(express.json())
app.use(morgan('dev'))
dotenv.config()
connectDB()


// app.use('/', (req,res)=>{ res.send("MERN CHAT IS RUNNING") })
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use(notFound)
app.use(errorHandler)

app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id)
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})

app.listen(port, console.log(`Server has started on PORT ${port}`.rainbow))
