const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send(`Boss is sitting ${port}`);
})

app.listen(port, ()=>{
    console.log('Bistro Boss is sitting on the port', port);
})
