const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    const coffeeCollection = client.db('coffeDB').collection('coffee')
    // Create a Data into database
    app.post('/coffee', async(req,res)=>{
        const newCoffee = req.body
        console.log(newCoffee);
        const result = await coffeeCollection.insertOne(newCoffee)
        res.send(result)
    })
    // Read data from database
    app.get('/coffee', async(req,res)=>{
        const cursor = coffeeCollection.find();
        const result = await cursor.toArray();
        res.send(result)
    })
    // Find a specific Coffee information
    app.get('/coffee/:id', async(req,res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeeCollection.findOne(query)
        res.send(result)

    })
    // Update a specific coffee information
    app.put('/coffee/:id', async(req,res)=>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true}
        const updatedCoffee = req.body;
        const coffee ={
            $set: {
                name: updatedCoffee.name ,
                quantity: updatedCoffee.quantity,
                supplier: updatedCoffee.supplier, 
                taste: updatedCoffee.taste, 
                category: updatedCoffee.category, 
                details: updatedCoffee.details, 
                photo: updatedCoffee.photo, 
            }
        }
        const result = await coffeeCollection.updateOne(filter, coffee, options)
        res.send(result)

    })
    // Delete operation
    app.delete('/coffee/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id : new ObjectId(id)}
        const result = await coffeeCollection.deleteOne(query)
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


// MIDDLEWERE
app.use(cors())
app.use(express.json())

// Test 1
app.get("/",(req,res)=>{
    res.send('Coffie Admin panel code is running')
})

// Test 2
app.listen(port,()=>{
    console.log("Admin panel is running on port", port)
})