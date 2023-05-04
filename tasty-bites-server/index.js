const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefs = require('./data/chefDetails.json')
// main codes
app.get('/', (req, res) => {
    res.send('Tasty Bites is running')
})

app.use(cors());

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefsDetails = chefs.find(singleChef => singleChef.id == id)
    res.send(chefsDetails);
})



app.listen(port, () => {
    console.log('Tasty bites is running on port', port)
})
