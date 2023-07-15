const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;

        const conn = await mongoose.connect(uri,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
            // useFindAndModify: true,
        })

        console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold)
        process.exit();
    }
}

module.exports=connectDB