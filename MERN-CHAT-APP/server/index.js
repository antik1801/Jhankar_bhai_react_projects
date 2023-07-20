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
const messageRoutes = require('./routes/messageRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const { Socket } = require("socket.io")
const path = require('path')
// const { MongoClient, ServerApiVersion } = require('mongodb');


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
app.use('/api/message', messageRoutes)

// -------------------------------------- Deployment --------------------------

// const __dirname1 = path.resolve();
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname1, '/client/dist')))
//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"))
//   })
// }
// else{
//   app.get('/', (req,res)=>{
//     res.send('API is running successfully')
//   })
// }

// -------------------------------------- Deployment --------------------------


app.use(notFound)
app.use(errorHandler)

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     const usersCollection = client.db('mern-chat').collection('users')

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

  //   await client.db("admin").command({ ping: 1 });
  //   console.log("Pinged your deployment. You successfully connected to MongoDB!".america.bold);
  // } finally {

  // }
// }
// run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('MERN CHAT APP IS RUNNING..')
})

const server = app.listen(port ,
  console.log(`MERN CHAT APP IS RUNNING ON APP ${port}`.yellow.bold)
)

const io = require('socket.io')(server, {
  pingTimeout: 60000,
  // rejectUnauthorized: false,
  cors: {
    origin: 'http://localhost:5173',
    // methods: ["GET", "POST", "OPTIONS"]
  }
  
})

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on('typing', (room) => socket.in(room).emit("typing"))
  socket.on('stop typing', (room) => socket.in(room).emit("stop typing"))
  socket.on('new message', (newMessageRecieved)=>{
    var chat = newMessageRecieved.chat;
    if (!chat.users) return console.log('chat.users not defined')
    chat?.users?.forEach((user) =>{

      if (user._id == newMessageRecieved.sender._id) return

      socket.in(user._id).emit("message recieved", newMessageRecieved)
    });
  });
  socket.off("setup", ()=>{
    console.log("USER DISCONNECTED")
    socket.leave(userData._id)
  })
});