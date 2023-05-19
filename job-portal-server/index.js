const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// jobPortal
// HcrRl8ARJuyjxYI4

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
        await client.connect();
        const jobCollection = client.db('jobDB').collection('jobs')
        // Add a Job
        app.post('/postjob', async (req, res) => {
            try {
                const body = req.body;
                const result = await jobCollection.insertOne(body);
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })
        // Find all jobs 
        app.get('/allJobs', async(req,res)=>{
            try {
                const result = await jobCollection.find().toArray();
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })
        //
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
    res.send('Job Portal is online')
})

app.listen(port, () => {
    console.log(`JOB PORTAL is running in server port ${port}`)
})