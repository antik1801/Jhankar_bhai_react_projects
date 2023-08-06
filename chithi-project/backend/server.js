const express = require("express")
const chats  = require("./data/data")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require("./config/db")
require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandlers } = require("./middlewares/errorMiddleware")
const PORT = process.env.PORT || 5000
connectDB()

app.use(morgan('dev'))
app.use(express.json())  // accept JSON data from frontend

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandlers)

app.get("/", (req,res)=>{
    res.send("API is running")
})

// app.get('/api/chat', (req,res)=>{
//     res.send(chats)
// })

app.get('/api/chat/:id', (req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
})

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))