const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express();
require('dotenv').config()

// Middleweres


app.use(cors())
app.use(express.json())

// ~~~~~~~~~~~~~~~~~~~~~~~~~~MongoDB Configarations~~~~~~~~~~~~~~~~~~~~



const { MongoClient, ServerApiVersion } = require('mongodb');
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
    client.connect();
    // Collections
    const courseCollection = client.db('medlanddb').collection('courses')
    const cartCollection = client.db('medlanddb').collection('carts')

    app.get('/courses', async(req,res)=>{
        const result = await courseCollection.find().toArray()
        res.send(result)
    })

    app.get('/test', (req,res)=>{
        res.send("{This is a test}")
    })

    // cart collection related api
    app.post('/carts', async(req,res)=>{
      const item = req.body
      console.log(item)
      const result = cartCollection.insertOne(item)
      res.send(result)
    })
    // course collection apies
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MONGODB ENDS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req,res)=>{
    res.send("MEDLFIE is running!")
})

app.listen(port, ()=>{
    console.log('Medlife is running on port', port);
})

