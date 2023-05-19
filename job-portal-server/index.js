const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// jobPortal
// HcrRl8ARJuyjxYI4

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Job Portal is online')
})

app.listen(port, ()=>{
    console.log(`JOB PORTAL is running in server port ${port}`)
})