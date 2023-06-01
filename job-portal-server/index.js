const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const SSLCommerzPayment = require('sslcommerz-lts')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


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


const store_id = process.env.SSL_STORE_ID
const store_passwd = process.env.SSL_STORE_PASS
const is_live = false //true for live, false for sandbox



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const jobCollection = client.db('jobDB').collection('jobs')
        // indexing
        const productCollection = client.db('jobDB').collection('product')
        const indexKeys = { title: 1, category: 1 }
        const indexOptions = { name: 'titleCategory' }

        const result = await jobCollection.createIndex(indexKeys, indexOptions)

        // search field
        app.get('/jobSearchByTitle/:text', async (req, res) => {
            try {
                const searchText = req.params.text;
            const result = await jobCollection.find({
                $or: [
                    { title: { $regex: searchText, $options: "i" } },
                    { category: { $regex: searchText, $options: "i" } },
                ]
            }).toArray();
            res.send(result)
            } catch (error) {
                res.send(error.message)
            }
            
        })

        //sslcommerz init
app.get('/init', async(req, res) => {
    const product = await productCollection.findOne({_id: new ObjectId(req.body.product_id)});
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });
})

        // Add a Job
        app.post('/postjob', async (req, res) => {
            try {
                const body = req.body;
                body.createAt = new Date();
                const result = await jobCollection.insertOne(body);
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })
        app.post('/order', async(req,res)=>{
            console.log(req.body);
        })
        // Find all jobs 
        app.get('/allJobs/:text', async (req, res) => {
            try {
                if (req.params.text == 'remote' || req.params.text == 'offline') {
                    const result = await jobCollection.find({ status: req.params.text }).sort({ createAt: -1 }).toArray()
                    return res.send(result)
                }
                const result = await jobCollection.find({}).sort({ createAt: -1 }).toArray();
                res.send(result);

            } catch (error) {
                res.send(error.message)
            }

        })

        app.get('/myJobs/:email', async (req, res) => {
            try {
                console.log(req.params.email)
                const result = await jobCollection.find({ postedBy: req.params.email }).toArray()
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }

        })
        // server side indexing

        app.get('/jobs/:id', async(req,res)=>{
            try {
                const id = req.params.id;
                const result = await jobCollection.findOne({_id: new ObjectId(id)})
                res.send(result)
            } catch (error) {
                res.send(error.message);
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