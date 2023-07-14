import { useState } from "react";
import "./App.css";
import getWeather from "./api/weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticleJs from "./Components/ParticleJs";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataExist, setWeatherDataExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleWeather = (e) => {
    setLoading(true);
    e.preventDefault();
    const cities = e.target.cities.value;
    if (cities === "") {
      return toast.error("Cities name can not be empty");
    }
    setWeatherDataExist(true);
    const citiesArray = cities.split(",");
    getWeather(citiesArray)
      .then((data) => {
        const weatherArray = Object.entries(data.weather);
        setWeatherData(weatherArray);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  if (loading) {
    return (
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container text-center appContainer">
      <h1 className="text-primary mb-3">Weather AI</h1>
      <form onSubmit={handleWeather}>
        <input
          type="text"
          name="cities"
          className="form-control w-50 mx-auto"
          placeholder="please write city names and separate with ,"
        />
        <button type="submit" className="btn btn-primary mt-2 mb-2">
          Details
        </button>
      </form>
      <div className="container w-50 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temparature</th>
            </tr>
          </thead>
          <tbody>
          
            {
              weatherData.map((city,index)=>
                <tr key={index}>
              <td>{city[0]}</td>
              <td>{city[1]}</td>
              </tr>
             )
            }
            
          </tbody>
        </table>
      </div>
      <ParticleJs></ParticleJs>
    </div>
  );
}

export default App;
