const express = require("express")
const app = express()
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post("/getWeather", async(req,res)=>{
    const {cities} = req.body
    try {
        const weatherData = {}
        for (const city of cities) {
            const response = await axios.get()
            const {temp_c} = response.data.current;
            weatherData[city] = `${temp_c}C`
        }
        const responseObj = {weather: weatherData}
        res.json(responseObj)

    } catch (error) {
        res.send(error.message)
    }
})

app.get('/', (req,res)=>{
    res.send("Weather API IS RUNNING")
})
app.listen(port, ()=>{
    console.log(`Weather API IS RUNNING ON PORT ${port}`)
})