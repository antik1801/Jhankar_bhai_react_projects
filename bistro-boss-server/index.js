const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env
    .DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;

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
        // await client.connect();

        const menuCollection = client.db('bistroDb').collection('menu')
        const reviewCollection = client.db('bistroDb').collection('reviews')

        // Get Method
        app.get('/menu', async (req, res) => {
            try {
                const result = await menuCollection.find().toArray();
                res.send(result);
            } catch (error) {
                res.send(error.message);
            }

        })
        app.get('/review', async (req, res) => {
            try {
                const result = await reviewCollection.find().toArray();
                res.send(result);
            } catch (error) {
                res.send(error.message);
            }
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send(`Boss is sitting ${port}`);
})

app.listen(port, () => {
    console.log('Bistro Boss is sitting on the port', port);
})
