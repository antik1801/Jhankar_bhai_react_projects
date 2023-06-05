const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const app = express()
require('dotenv').config()
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    // rejected part
    if (!authorization) {
        return res.status(404).send({ error: true, message: "Unauthorized access" })
    }
    // barer token
    const token = authorization.split(" ")[1];
    // accepted part
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: "Unauthorized Access" })
        }
        req.decoded = decoded;
        next();
    })

}

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
        const paymentCollection = client.db('bistroDb').collection('payment')

        // JWT API
        app.post('/jwt', (req, res) => {
            try {
                const user = req.body;
                const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
                res.send({ token })
            } catch (error) {
                res.send(error.message)
            }
        })
        // use verifyJWT before using verify admin
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email }
            const user = await userCollection.findOne(query);
            if (user?.role !== 'admin') {
                return res.status(403).send({ error: true, message: 'forbidden message' })
            }
            next();
        }

        //users related api
        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                const query = { email: user.email }
                const existingUser = await userCollection.findOne(query)
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
        // Security layer:
        app.get('/users/admin/:email', verifyJWT, async (req, res) => {
            const email = req.params.email;
            if (req.decoded.email != email) {
                res.send({ admin: false })
            }
            const query = { email: email };
            const user = await userCollection.findOne(query)
            const result = { admin: user?.role === 'admin' }
            res.send(result);

        })
        app.get('/users', async (req, res) => {
            try {
                const result = await userCollection.find().toArray();
                res.send(result)
            } catch (error) {
                res.send(error.message)
            }
        })

        // menu related apis
        app.get('/menu', async (req, res) => {
            try {
                const result = await menuCollection.find().toArray();
                res.send(result);
            } catch (error) {
                res.send(error.message);
            }

        })

        app.post('/menu', verifyJWT, verifyAdmin, async (req, res) => {
            const newItem = req.body;
            const result = await menuCollection.insertOne(newItem)
            res.send(result);
        })

        app.get('/review', async (req, res) => {
            try {
                const result = await reviewCollection.find().toArray();
                res.send(result);
            } catch (error) {
                res.send(error.message);
            }
        })
        app.get('/carts', verifyJWT, async (req, res) => {
            try {
                const email = req.query.email;
                if (!email) {
                    res.send([]);
                }
                const decodedEmail = req.decoded.email;
                if (email !== decodedEmail) {
                    return res.status(403).send({ error: true, message: "Forbidden access!" })
                }
                const query = { email: email }
                const result = await cartCollection.find(query).toArray()
                res.send(result);

            } catch (error) {
                res.send(error.message)
            }

        })
        // patch apis
        app.patch('/users/admin/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) }
                const updateDoc = {
                    $set: {
                        role: "admin"
                    },
                };
                const result = await userCollection.updateOne(filter, updateDoc)
                res.send(result)
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
        // delete item from menu
        app.delete('/menu/:id', verifyJWT, verifyAdmin, async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) }
                const result = await menuCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                res.send(error.message)
            }
        })
        // create payment intent
        app.post('/create-payment-intent', verifyJWT, async (req, res) => {
            const { price } = req.body;
            const amount = price * 100;
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ["card"],

            });
            res.send({
                clientSecret: paymentIntent.client_secret,
            })

        })
        //
        app.get('/admin-status',verifyJWT,verifyAdmin, async (req, res) => {
            const users = await userCollection.estimatedDocumentCount();
            const products = await menuCollection.estimatedDocumentCount();
            const orders = await paymentCollection.estimatedDocumentCount();

            // best way to get sum of a field is to use group and sum operator
            /*  await paymentCollection.aggregate([
                  {
                      $group: {
                          _id: null,
                          total: { $sum: '$price' }
                      }
                  }
              ]).toArray((err, result) => {
                  if (err) {
                      console.error('Error executing the aggregation:', err);
                      return;
                  }
                const sum = result[0].total;
                 console.log('Total sum of prices:', sum);
              })
              */
            const payments = await paymentCollection.find().toArray();
            const revenue = payments.reduce((sum,item)=>sum+item.price,0)
            res.send({
                users, products, orders,revenue
            })
        })
        /**
         * -----------Bangla system-------------------
         * -----------2nd best sollution--------------
         * 1. load all payments
         * 2. for each payments get the menu item
         * 3. for each item in the menu items array get the menu collection .
         * 4. put them in the array
         * 5. seperate all ordered items by category using filter.
         * 6. Now get the quantity using length.
         * 7. for each amount use reduce to get the total amount spent the category
         */
        /**
         * English system 
         * -----------------Mongodb Aggrigation-----------------
         * -----------------Pipeline----------------------------
         */
        app.get('/order-stats', async(req,res)=>{

        })
        // payment related Api
        app.post('/payments', verifyJWT, async (req, res) => {
            const payment = req.body;
            const insertResult = await paymentCollection.insertOne(payment)
            const query = {
                _id: {
                    $in: payment.cartItems.map(id => new ObjectId(id))
                }
            }
            const deleteResult = await cartCollection.deleteMany(query)
            res.send({ insertResult, deleteResult });
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