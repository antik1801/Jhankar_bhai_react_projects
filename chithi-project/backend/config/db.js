import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
    } catch (error) {
        
    }
}