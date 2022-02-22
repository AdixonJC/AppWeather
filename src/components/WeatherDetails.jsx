import React from 'react';
import celsiusToFahrenheit from '../helpersJs/celsiusToFahrenheit';

const WeatherDetails = ({weather, changeTemp}) => {
    return (
    <>
        <div className="blocks">

            <div>
               <ul>
                  <li>
                     <b><i className="fa-solid fa-wind color--ico"></i>
                        {` Wind direction: ${weather?.wind.deg}° Deg`}
                     </b>
                  </li>

                  <li>
                     <b><i className="fa-solid fa-wind color--ico"></i>
                        {` Wind gust: ${weather?.wind.gust ? weather?.wind.gust + " Meter/seg": " 0 Meter/seg "}`}
                     </b>
                  </li>

                  <li>
                     <b><i className="fa-solid fa-wind color--ico"></i>
                        {` Wind Speed: ${weather?.wind.speed} Meter/seg`}
                     </b>
                  </li>
                  <li>
                     <b><i className="fa-solid fa-droplet color--ico"></i>
                        {` Humidity: ${weather?.main.humidity} %`}
                     </b>
                  </li>

                  <li>
                     <b><i className="fa-brands fa-cloudversify color--ico"></i>
                        {` Atmospheric pressure: ${weather?.main.pressure} hPa`}
                     </b>
                  </li>
               </ul>
            </div>

      <b>
         <i className="fa-solid fa-temperature-low color--ico"></i>
         {` Temp Min ${
            changeTemp ? 
            (weather?.main?.temp_min - 273).toFixed(1) + " °C"
            : 
            celsiusToFahrenheit(weather?.main?.temp_min - 273).toFixed(1) + " °F" }`}
      </b>

            <br/>

      <b>
         <i className="fa-solid fa-temperature-high color--ico"></i>
         {` Temp Max ${
            changeTemp ? 
            (weather?.main?.temp_max - 273).toFixed(1) + " °C"
            : 
            celsiusToFahrenheit(weather?.main?.temp_max - 273).toFixed(1) + " °F"}`}
      </b>

</div>
    </>
    );
};

export default WeatherDetails;