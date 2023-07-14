const getWeather = async cities =>{
    const response = await fetch(`http://localhost:5000/getWeather`,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({cities : cities})
    })
    const data = await response.json()
    // console.log(data)
    return data
}
export default getWeather;
