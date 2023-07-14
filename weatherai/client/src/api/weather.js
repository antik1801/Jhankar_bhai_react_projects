const getWeather = async cities =>{
    const response = await fetch(`https://weather-app-server-gamma.vercel.app/getWeather`,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({cities : cities})
    })
    const data = await response.json()
    return data
}
export default getWeather;
