const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

console.log(process.env.WEATHER_API_KEY)
app.post("/getWeather", async(req,res)=>{
    const {cities} = req.body
    try {
        const weatherData = {}
        for (const city of cities) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
            console.log(response.data.main.temp, response.data.name)
            const temp_c = response.data.main.temp;
            weatherData[city] = `${temp_c} C`
        }
        const responseObj = {weather: weatherData}
        res.json(responseObj)
    } catch (error) {
        res.send(error.message)
    }
})
app.get("/test", (req,res)=>{
    res.send("Test API")
})

app.get('/', (req,res)=>{
    res.send("Weather API IS RUNNING")
})
app.listen(port, ()=>{
    console.log(`Weather API IS RUNNING ON PORT ${port}`)
})