import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import colors from "colors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { MongoClient, ServerApiVersion } from "mongodb"


// configarations /
dotenv.config() 

const app = express()
app.use(express.json())   // req json file 
app.use(helmet()) // henadler of error
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"})) // cross origin errors
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// Mongoose setup
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=> console.log(`NEW social media is running in port: ${PORT}`.america))
}).catch(error=>{
    console.log(error)
})






