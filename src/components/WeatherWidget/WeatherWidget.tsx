import { useEffect, useState } from "react";
import { defineSign } from "../../utils/defineSign";
import "./WeatherWidget.css";

export const WeatherWidget = ({ weatherData }: any) => {
  const temperature = weatherData.main.temp;
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    chrome.storage.local.get("selectedCity", (result) => {
      if (result.selectedCity !== undefined) {
        setCity(result.selectedCity);
      }
    });
  }, []);

  const handleWeatherClick = () => {
    setShowWeather(!showWeather);
  };

  return (
    <>
      <div onClick={handleWeatherClick} className="weather-widget">
        {weatherData ? (
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weatherData.weather[0].icon +
              "@2x.png"
            }
            alt="weather icon"
          ></img>
        ) : (
          <span>Q</span>
        )}
      </div>
      {showWeather && (
        <h2 className="weather-description">
          Погода в городе {city}: {defineSign(Math.round(temperature))}°C
        </h2>
      )}
    </>
  );
};
