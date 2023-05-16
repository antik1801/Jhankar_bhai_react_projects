const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;

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
    const booksCollection = client.db("bookManagement").collection('books')

    //insert
    app.post('/books', async(req,res)=>{
      try{
        const data = req.body
        console.log(data)
        const result = await booksCollection.insertOne(data)
        res.send(result)
      }
      catch(error){
        console.log(error.message  )
      }
    })
    //get data
    app.get('/books',async(req,res)=>{
     try {
       const cursor = booksCollection.find()
      const result = await cursor.toArray()
      res.send(result)
     } catch (error) {
      console.log(error.message)
     }
    } )
    //update data
    app.patch('/books/:id', async(req,res)=>{
      try{
         const id = req.params.id;
      console.log(id)
      const updateBookData = req.body
      const filter = {_id:new ObjectId(id)}
      const options = {upsert:true}
      const updateDoc = {
        $set:{
          ...updateBookData,
        }
      }
      const result = await booksCollection.updateOne(filter,updateDoc)
      res.send(result)
      }
      catch(error){
        res.send(error.message)
      }
     
    })
    app.delete('/books/:id', async(req,res)=>{
      try{
         const id = req.params.id;
      const query = {_id:new ObjectId(id)}
      const result = await booksCollection.deleteOne(query)
      res.send(result)
      }
     catch(err){
      res.send(err.message)
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


app.get('/', (req,res)=>{
    res.send('Book managemet is running')
})
app.listen(port, ()=>{
    console.log('Book Management server is runnning on port', port)
})