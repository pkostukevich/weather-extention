import ReactDOM from 'react-dom/client';
import { WeatherWidget } from './components/weather-widget';


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.city) {
      fetchWeatherData(message.city)
        .then(weatherData => {
            updateWeatherWidget(weatherData);
            sendResponse({ weatherData });
        })
        .catch(error => {
          sendResponse({ error: error.message });
        });
    
      return true;
    }
  });
  
async function fetchWeatherData(city: string): Promise<any> {
    const apiKey = '876d20b4810ca87f9160396aed5974a0';
    const apiUrl = 'https://api.openweathermap.org/data/2.5';

    
    const response = await fetch(`${apiUrl}/weather?q=${city}&units=metric&appid=${apiKey}`); 
    return await response.json();
}

function updateWeatherWidget(weatherData: any) {
    const cards = document.querySelectorAll('.volume-full');

    cards.forEach(card => {

        let weatherWrapper = card.querySelector('.weather-wrapper');

        if (!weatherWrapper) {
            weatherWrapper = document.createElement('div');
            weatherWrapper.className = 'weather-wrapper';
            card.appendChild(weatherWrapper);
        }

        const rootDiv = ReactDOM.createRoot(weatherWrapper);
        rootDiv.render(
            <WeatherWidget weatherData={weatherData} />
        );
    });
}





