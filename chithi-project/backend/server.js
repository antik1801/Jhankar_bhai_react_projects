const express = require("express")
const chats  = require("./data/data")
const app = express()
require('dotenv').config()



app.get("/", (req,res)=>{
    res.send("API is running")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id', (req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
})

app.listen(5000, console.log("Server started on PORT 5000"))