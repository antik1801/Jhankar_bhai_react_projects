const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const chats = require("./data/data")
var morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
dotenv.config()

app.get("/", (req,res)=>{
    res.send("Mern new chat is running successfully")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id', (req,res)=>{
    console.log(req.params.id)
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat)
})

app.listen(port, console.log(`Server has started on PORT ${port}`))
