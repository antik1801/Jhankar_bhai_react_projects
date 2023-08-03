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
import { fileURLToPath } from "url"

// configarations /

const __filename = fileURLToPath(import.meta.url)   // used to save file in malter
const __dirname = path.dirname(__filename)  // pathname adde file name save
dotenv.config() 

const app = express()
app.use(express.json())   // req json file 
app.use(helmet()) // henadler of error
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"})) // cross origin errors

app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb" , extended: true}))



