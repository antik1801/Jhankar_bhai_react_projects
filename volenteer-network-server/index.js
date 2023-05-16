const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    const volenteerCollection = client.db('volenteerDB').collection('volenteer')
    const serviceCollection = client.db('volenteerDB').collection('services')
    //Read data from the category
    app.get('/allCategories', async(req,res)=>{
        const result = await volenteerCollection.find().toArray()
        res.send(result)
    })
    // Read all services
    app.get('/services', async(req,res)=>{
        const result = await serviceCollection.find().toArray()
        res.send(result)
    })
    // Add data to the service
    app.post('/services', async(req,res)=>{
        const service = req.body
        console.log(service)
        const result = await serviceCollection.insertOne(service)
        res.send(result)
    })
    //Specific data update
    app.patch('/services/:id', async(req,res)=>{
        const id = req.params.id;
        const updateinfo = req.body;
        console.log(id);
        const filter = {_id:new ObjectId(id)}
        const updateService = {
            $set:{
                name: updateinfo.name,
                address: updateinfo.address,
                photo: updateinfo.photo,
                status: updateinfo.status,
            }
        }
        const result = await serviceCollection.updateOne(filter,updateService)
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



app.get('/', (req, res) => {
    res.send('Volenteer is running');
  })
  app.listen(port, () => {
    console.log('Volenteer is online in port', port);
  })