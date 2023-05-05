const express = require("express")
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const products = require('./data/products.json')

app.get('/', (req,res) =>{
    res.send('Hello world')    
})
app.use(cors());
app.get('/products', (req,res)=>{
    res.send(products)
})

app.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    const selectedItems = products.find(singleItem => selectedItems.id == id)
    res.send(selectedItems)
})

app.listen(port, ()=>{
    console.log('Listenin to the port', port)
})