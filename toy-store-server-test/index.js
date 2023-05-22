const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


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
        const toyCollection = client.db('ToyLineDB').collection('ToyLine')
        
        app.get('/toysByTitle/:text', async(req,res)=>{
            try {
                const searchText = req.params.text;
                const result = await toyCollection.find({
                    $or:[
                        {name: {$regex: searchText, $options:"i"}},
                        {price: {$regex: searchText}},
                    ]
                }).toArray()
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })

        // Get Data 
        app.get('/allToys', async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 0;
                const limit = parseInt(req.query.limit) || 20;
                const skip = page * limit;
                const cursor = toyCollection.find().skip(skip).limit(limit);
                const result = await cursor.toArray();
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })
        // find the total number of data exists in the database
        app.get('/totalToys', async (req, res) => {
            const result = await toyCollection.estimatedDocumentCount();
            res.send({ totalToys: result })
        })
        // find seller totals upload
        app.get('/sellerTotal', async (req, res) => {
            try {
                let query = {};
                if (req.query?.email) {
                    query = { sellerEmail: req.query?.email }
                }
                console.log(query)
                const result = await toyCollection.estimatedDocumentCount();
                // res.send({totalToys: result});
            } catch (error) {
                res.send(error.message)
            }

        })
        // Get a specific Seller emails product
        app.get('/sellerItems', async (req, res) => {
            try {
                let query = {};
                if (req.query?.email) {
                    query = { sellerEmail: req.query?.email }
                }
                console.log(query)
                const result = await toyCollection.find(query).toArray();
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })

        // Get the specific subcategory information
        app.get('/category', async (req, res) => {
            try {
                const limit = parseInt(req.query.limit) || 9;
                let query = {};
                if (req.query?.subCategory) {
                    query = { subCategory: req.query?.subCategory }
                }
                const result = await toyCollection.find(query).limit(limit).toArray();
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })
        //get the category all items
        app.get('/specificCategory', async (req, res) => {
            try {
                let query = {};
                if (req.query?.subCategory) {
                    query = { subCategory: req.query?.subCategory }
                }
                const result = await toyCollection.find(query).toArray()
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }

        })
        // get a specific document data
        app.get('/allToys/:id', async (req, res) => {
            try {
                const id = req.params.id;
                console.log(id)
                const query = { _id: new ObjectId(id) }
                const result = await toyCollection.findOne(query)
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })
        // Add a toy item to the server
        app.post('/addToy', async (req, res) => {
            try {
                const toy = req.body;
                console.log(toy)
                const result = await toyCollection.insertOne(toy)
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }

        })

        app.patch('/updateToy/:id', async(req,res)=>{
            try{
                const id = req.params.id;
                const updatedToy = req.body;
                const filter = {_id: new ObjectId(id)}
                const updatedDoc = {
                    $set:{
                        ...updatedToy
                    }
                }
                const result = await toyCollection.updateOne(filter, updatedDoc)
                res.send(result)
            }
            catch(error){
                res.send(error.message)
            }
        })
        app.delete('/removeToy/:id', async(req,res)=>{
            try{
                const id = req.params.id;
                const query = {_id: new ObjectId(id)}
                const result = await toyCollection.deleteOne(query)
                res.send(result);
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



app.get('/', (req, res) => {
    res.send('Toy Line BD is online')
})

app.listen(port, () => {
    console.log(`Toy line BD is listening on port ${port}`)
})
