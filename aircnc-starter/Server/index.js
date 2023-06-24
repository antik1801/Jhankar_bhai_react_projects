const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
var jwt = require('jsonwebtoken');
var morgan = require('morgan')
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

const secret_token=process.env.ACCESS_TOKEN_SECRET
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;

const verifyJWT=(req,res,next) =>{
  const authorization = req.headers.authorization
  // token verify
  const token = authorization.split(" ")[1]
  jwt.verify(token,secret_token, (err,decoded)=>{
    if (err) {
      return res.status(401).send({error: true, message: "Unauthorized Access"})
    }
    req.decoded = decoded
  })
  next()
}


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

    const usersCollection = client.db('aircnc2').collection('users')
    const roomsCollection = client.db('aircnc2').collection('rooms')
    const bookingCollection = client.db('aircnc2').collection('booking')

    // generate jwttoken
    app.post('/jwt',(req,res)=>{
      const email = req.body
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10h',})
      res.send({token})
    })

    // save user email and role in userdb
    app.put('/users/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email }
      const options = {
        upsert: true
      }
      const updateDoc = {
        $set: user
      }
      const result = await usersCollection.updateOne(query, updateDoc, options)
      res.send(result)
    })
    // get user
    app.get('/users/:email', async (req, res) => {
      const email = req.params.email
      const query = { email: email }
      const result = await usersCollection.findOne(query)
      res.send(result)
    })
    app.post('/rooms', async (req, res) => {
      const room = req.body
      const result = await roomsCollection.insertOne(room)
      res.send(result)
    })
    // save a bookings in database
    app.post('/bookings', async (req, res) => {
      const room = req.body
      const result = await bookingCollection.insertOne(room)
      res.send(result)
    })
    // get all rooms
    app.get('/rooms', async (req, res) => {
      const result = await roomsCollection.find().toArray()
      res.send(result)
    })
    // update room booking status
    app.patch('/rooms/status/:id', async (req, res) => {
      const id = req.params.id
      const status = req.body.status
      const query = { _id: new ObjectId(id) }
      const updatedDoc = {
        $set: {
          booked: status
        },
      }
      const update = await roomsCollection.updateOne(query, updatedDoc)
      res.send(update)
    })
    // get bookings for guest
    app.get('/bookings', async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([])
      }
      const query = { 'guest.email': email }
      const result = await bookingCollection.find(query).toArray()
      res.send(result)
    }) 
    // get all bookings for hosts
    app.get('/bookings/host', async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([])
      }
      const query = { host: email }
      console.log(query)
      const result = await bookingCollection.find(query).toArray()
      res.send(result)
    })
    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(query)
      res.send(result)
    })
    // Delete a single rooms in mylisting
    app.delete('/rooms/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await roomsCollection.deleteOne(query)
      res.send(result)
    })
    // get a single room
    app.get('/rooms/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await roomsCollection.findOne(query)
      res.send(result)
    })
    // get rooms for host
    app.get('/hostrooms/:email',verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email
      const email = req.params.email
      if (decodedEmail !== email) {
        return res.status(401).send({error: true, message: "Unaithorized Access"})
      }
      const query = { 'host.email': email }
      const result = await roomsCollection.find(query).toArray()
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


app.get('/', (req, res) => {
  res.send('AirCNC Server is running..')
})

app.listen(port, () => {
  console.log(`AirCNC is running on port ${port}`)
})