const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors')
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

const varifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: "Unauthorized access" })
  }
  const token = authorization.split(" ")[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: "Unauthorized access" })
    }
    req.decoded = decoded;
    next();
  })
}


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // MongoDB collections
    const serviceCollection = client.db('carsDoctor').collection('services')
    const bookingCollection = client.db('carsDoctor').collection('bookings')
    // JWT CODES
    app.post('/jwt', (req, res) => {
      try {
        const user = req.body
        console.log(user)
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '1h',
        })
        console.log({ token })
        res.send({ token })
      } catch (error) {
        res.send(error.message)
      }
    })
    // Read all the data from database routes
    app.get('/services', async (req, res) => {
      try {
        const sort = req.query.sort;
        // const query = {}
        const query = {}
        const options = {
          sort: { price: sort === 'asc' ? 1 : -1 },
        }
        const cursor = serviceCollection.find(query, options)
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.send(error.message)
      }

    })
    // Read Specific Data from database
    app.get('/services/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const options = {
          // Include only the `title` and `imdb` fields in the returned document
          projection: { title: 1, price: 1, service_id: 1, img: 1 },
        };
        const result = await serviceCollection.findOne(query, options)
        res.send(result)
      } catch (error) {
        res.send(error.message)
      }

    })
    // See all the booking collections
    app.get('/bookings', varifyJWT, async (req, res) => {
      try {
        const decoded = req.decoded
        console.log('Came Back after verify', decoded)
        if (decoded.email != req.query.email) {
          return res.status(403).send({ error: 1, message: 'Forbidden access' })
        }
        let query = {}
        if (req.query?.email) {
          query = { email: req.query.email }
        }
        const result = await bookingCollection.find(query).toArray()
        res.send(result)
      } catch (error) {
        res.send(error.message)
      }
    })
    // Add a booking collection
    app.post('/bookings', async (req, res) => {
      try {
        const booking = req.body
        console.log(booking)
        const result = await bookingCollection.insertOne(booking)
        res.send(result)
      } catch (error) {
        res.send(error.message)
      }

    })
    // delete a specific item
    app.delete('/bookings/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await bookingCollection.deleteOne(query)
        res.send(result)
      } catch (error) {
        res.send(error.message)
      }

    })
    // Update a specific information from bookings
    app.patch('/bookings/:id', async (req, res) => {
      try {
        const id = req.params.id
        const updatedBooking = req.body
        const filter = { _id: new ObjectId(id) }
        console.log(updatedBooking)
        const updatedDoc = {
          $set: {
            status: updatedBooking.status,
          }
        }
        const result = await bookingCollection.updateOne(filter, updatedDoc)
        res.send(result)
      } catch (error) {
        res.send(error.message)
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
  res.send('Doctor car is running ')
})

app.listen(port, () => {
  console.log('Car doctor server is running on port', port)
})