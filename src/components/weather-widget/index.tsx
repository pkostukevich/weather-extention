import { useState } from 'react';
import { defineSign } from '../../utils/defineSign';
import './index.css'

export const WeatherWidget = (props: {weatherData: any}) => {
    const temperature = props.weatherData.main.temp;
    const [showWeather, setShowWeather] = useState(false);
    const [city, setCity] = useState('');

    const handleWeatherClick = () => {
        setShowWeather(!showWeather);
    };

    chrome.storage.local.get('selectedCity', (result) => {
        if (result.selectedCity !== undefined) {
          setCity( result.selectedCity);
        }
      });
    
  return (
    <>
    <div onClick={handleWeatherClick} className="weather-widget">
        {props.weatherData
        ?
         <img src={"http://openweathermap.org/img/wn/" + props.weatherData.weather[0].icon + "@2x.png"} alt="weather icon"></img> 
        :
        <span>Q</span>}
    </div>
    {showWeather && 
    (<h2 className='weather-description'>Погода в городе {city}: {defineSign(Math.round(temperature))}°C</h2>)}
    </>
  )
}

