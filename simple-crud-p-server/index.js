const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('simple crud app is running')
})

// myDatabase2
// F6VkeVZIY8DyX0zP

const uri = "mongodb+srv://myDatabase2:F6VkeVZIY8DyX0zP@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority";

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

    const usersConnection = client.db("usersDB").collection("users");

    app.get('/users', async(req,res)=>{
      const cursor = usersConnection.find()
      const results = cursor.toArray()
      res.send(results)
    })

    app.post('/users', async(req,res) => {
        const user = req.body
        console.log('new user', user)
        const result = await usersConnection.insertOne(user);
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


app.listen(port,()=>{
    console.log(`simple CRUD practise app is running on port ${port}`)
})
