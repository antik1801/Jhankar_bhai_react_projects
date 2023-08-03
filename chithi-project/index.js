const express = require("express")
const chats  = require("./data/data")
const app = express()
require('dotenv').config()



app.get("/", (req,res)=>{
    res.send("API is running")
})

app.listen(5000, console.log("Server started on PORT 5000"))