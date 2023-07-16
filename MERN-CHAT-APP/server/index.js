const express = require("express")
const cors = require("cors")
const app = express()
var morgan = require('morgan')
const chats = require("./data/data")
require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const { MongoClient, ServerApiVersion } = require('mongodb');

connectDB();


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json()) 
app.use(morgan('dev'))

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
    try {
      const usersCollection = client.db('mern-chat').collection('users')

      // app.put('/api/user/:email', async (req, res) => {
      //   const email = req.params.email;
      //   const user = req.body;
      //   console.log("line 46 req.body=",user)
      //   const query = { email: email }
      //   const options = {
      //     upsert: true
      //   }
      //   const updateDoc = {
      //     $set: user
      //   }
      //   const result = await usersCollection.updateOne(query, updateDoc, options)
      //   res.send(result)
      // })

      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!".america.bold);
    } finally {
     
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('MERN CHAT APP IS RUNNING..')
})

app.listen(port, () => {
    console.log(`MERN CHAT APP IS RUNNING ON APP ${port}`.yellow.bold)
})