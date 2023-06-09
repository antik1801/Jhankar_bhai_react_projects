const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(cors())
app.use(express.json())


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
    await client.connect();
    const doctorCollection = client.db('doctors').collection('doctor');
    // read data from database
    app.get("/doctors", async(req,res)=>{
        const cursor = doctorCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })
    // insert data in database
    app.post('/doctors', async(req,res)=>{
        try{
            const newDoctor = req.body
            console.log(newDoctor);
            // const result = await coffeeCollection.insertOne(newCoffee)
            // res.send(result)
        }
        catch(error){
            console.log(error)
        }
       
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


app.get("/",(req,res)=>{
    res.send("Doctor server is online")
})

app.listen(port, ()=>{
    console.log("App is running on port", port);
})