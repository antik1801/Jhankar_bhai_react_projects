const express = require("express")
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const places = require('./data/places.json')

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/places',(req,res)=>{
    res.send(places);
})

app.get('/places/:id',(req,res)=>{
    const id = req.params.id;
    const selectedPlaces = places.find(singlePlace => singlePlace.id == id)
    res.send(selectedPlaces);
})

app.use(cors());

app.listen(port, ()=>{
    console.log('Listening to the port', port)
})