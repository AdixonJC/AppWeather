import axios from "axios"
import { useState, useEffect } from 'react';
import './App.css';
import handleIcoChange from "./helpersJs/handleIcoChange";
import celsiusToFahrenheit from "./helpersJs/celsiusToFahrenheit";
import WeatherDetails from "./components/WeatherDetails";
import BackGround from "./components/BackGround";

function App() {

const [weather, setWeather] = useState(null)
const [icon, setIcon] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [changeTemp , setChangeTemp] = useState(true)



      const handleError = () => {
    console.log("the user did not allow access to his or her location.")
  }
  useEffect( () => {
     setIsLoading(true)
     setTimeout(() => {
         try {
         const sucess = position => {
         const lat = position.coords.latitude
         const lon = position.coords.longitude
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=721f8d059bbf7f33c8fd9e94975bd6a7`)
         .then(response => {
            setWeather(response.data)
            handleIcoChange(response.data.weather?.[0].icon , setIcon)
         }) 
      }
     navigator.geolocation.getCurrentPosition(sucess, handleError)
   }
        catch (error) {
           console.error(error)
        }
        finally {
           setIsLoading(false)
        }
     }, 2000)
},[])

const tempChange = () => {
   setChangeTemp(!changeTemp)
}


  return ( 
     <> 
            {
               
            isLoading ? <div className={"loader"}>Loading...</div>
               : <>
                  <div className="weather-container">
                     <BackGround
                      icon={weather?.weather?.[0].icon}
                     />
                     <div className="card-container">

                        <h1>App Weather</h1>

                     <div className="blocks">
                        <h3>
                           {weather?.sys.country} , {weather?.name}
                       </h3>
                           <i className={`${icon} icons`}></i>
                        <div>
                           <strong>{weather?.weather[0].description}</strong>
                        </div>
                              <h3>{changeTemp ? 
                                 (weather?.main?.temp - 273).toFixed(1) + " °C"
                                 : 
                                 celsiusToFahrenheit(weather?.main?.temp - 273).toFixed(1) + " °F"}
                              </h3>
                     </div>
                     
                        <WeatherDetails
                         weather={weather}
                         changeTemp={changeTemp}
                         />
                           
                       <div>
                           <button onClick={tempChange}>{changeTemp ? "Degrees Fahrenheit" : "Degrees Centigrade"}</button>
                       </div>
                      </div>
                     </div>
                        
                  </> 
               }
         </>
  );
}

export default App;
