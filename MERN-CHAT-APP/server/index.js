const express = require("express")
const cors = require("cors")
const app = express()
var morgan = require('morgan')
const chats = require("./data/data")
require('dotenv').config()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))


app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id', (req,res)=>{
    // console.log(req.params.id)
    const singleChats = chats.find(c=> c._id === req.params.id)
    res.send(singleChats)
})

app.get('/', (req, res) => {
    res.send('MERN CHAT APP IS RUNNING..')
})

app.listen(port, () => {
    console.log(`MERN CHAT APP IS RUNNING ON APP ${port}`)
})