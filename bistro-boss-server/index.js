const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const userCollection = client.db('bistroDb').collection('users');
        const menuCollection = client.db('bistroDb').collection('menu')
        const reviewCollection = client.db('bistroDb').collection('reviews')
        const cartCollection = client.db('bistroDb').collection('cart')

        //users related api
        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                const query = { email: user.email }
                const existingUser = await userCollection.findOne(query)
                console.log('existing user',existingUser);
                if (existingUser) {
                    return res.send({ message: 'User Already Existes' })
                }
                const result = await userCollection.insertOne(user);
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })

        // Get Method

        app.get('/users', async (req,res) =>{
            try {
                const result = await userCollection.find().toArray();
                res.send(result)            
            } catch (error) {
                res.send(error.message)
            }
        })


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
        app.get('/carts', async (req, res) => {
            try {
                const email = req.query.email;
                if (!email) {
                    res.send([]);
                }
                else {
                    const query = { email: email }
                    const result = await cartCollection.find(query).toArray()
                    res.send(result);
                }
            } catch (error) {
                res.send(error.message)
            }

        })

        //cart collection
        app.post('/carts', async (req, res) => {
            try {
                const item = req.body;
                const result = await cartCollection.insertOne(item);
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })
        // Delete Item
        app.delete('/carts/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) }
                const result = await cartCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                res.send(error.message)
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


/**
 * ---------------------------------------
 * NAMEING CONVENTIONS
 * ----------------------------------------
 * USERS : user collection
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.patch('/users/:id')
 * app.put('/users/:id')
 * app.delete('/users/:id')
 * 
 */