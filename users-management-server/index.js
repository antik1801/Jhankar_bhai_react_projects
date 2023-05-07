const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000



const users = [
    { id: 1, name: "asfia", email: "asfia@gmail.com" },
    { id: 2, name: "Ragim", email: "rahim@gmail.com" },
    { id: 3, name: "sagim", email: "sattar@gmail.com" },
]
app.get("/", (req, res) => {
    res.send('User management server is running')
})
app.use(cors());
app.use(express.json())


app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log('Application is running in port - ', port)
})
