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





