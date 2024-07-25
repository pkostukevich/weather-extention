import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
 const cities = ['Минск', 'Токио', 'Нью-Йорк'];

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {fetchWeather()}, [selectedCity]);

  useEffect(() => {
    chrome.storage.local.get('selectedCity', (result) => {
      if (result.selectedCity !== undefined) {
        setSelectedCity(result.selectedCity);
      }
    });
  }, []);
  
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    chrome.storage.local.set({ 'selectedCity': city });
  };
  
  const fetchWeather = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id!, { city: selectedCity }, response => {
        if (response) {
          chrome.storage.local.set({ 'weatherData': response.weatherData});
        }
      });
    });
  };
  
  return (
    <div>
      <h2>Узнать погоду в городе</h2>
      {cities.map((city, index) => (
        <button key={index} onClick={() => handleCityChange(cities[index])}
            className={cities[index] === selectedCity ? "button-city active" : "button-city"}>{city}</button>
    ))}
    </div>
  );
};

export default App;