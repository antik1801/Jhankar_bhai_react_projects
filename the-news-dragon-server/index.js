const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req,res)=>{
    res.send('dragon is running')
})

app.use(cors());

app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.get('/news',(req,res)=>{
    res.send(news);
})

app.get('/categories/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const selectedNews = news.find(singleNews => singleNews._id == id)
    res.send(selectedNews);
})



app.listen(port, ()=>{
    console.log('Dragon API is runnign on port', port)
})
