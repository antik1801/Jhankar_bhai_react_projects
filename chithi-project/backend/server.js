const express = require("express")
const chats  = require("./data/data")
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,

}

app.use(cors(corsOptions))
app.use(express.json())


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

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))