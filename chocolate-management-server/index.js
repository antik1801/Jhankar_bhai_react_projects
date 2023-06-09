const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const chocolateCollection = client.db('chocolateDB').collection('chocolate')

        app.get('/chocolates', async(req,res)=>{
            const cursor = chocolateCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        // ADD a chocklate to the db
        app.post('/chocolates', async(req,res)=>{
            const newChocolate = req.body;
            console.log(newChocolate)
            const result = await chocolateCollection.insertOne(newChocolate)
            res.send(result)
        })
        // find a specific chocolate from database
        app.get('/chocolates/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await chocolateCollection.findOne(query)
            res.send(result)
        })
        // Update a specific chocolate information
        app.put('/chocolates/:id', async(req,res)=>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const option={upsert: true}
            const updateChocolate = req.body;
            const chocolate = {
                $set:{
                    name: updateChocolate.name,
                    photo: updateChocolate.photo,
                    category: updateChocolate.category,
                    country: updateChocolate.country,
                }
            }
            const result = await chocolateCollection.updateOne(filter, chocolate, option)
            res.send(result)
        })
        //delete a item
        app.delete('/chocolates/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await chocolateCollection.deleteOne(query)
            res.send(result)
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send('Chocolate management server is online')
})

app.listen(port, () => {
    console.log('App is running on port ', port)
})