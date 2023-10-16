const API_KEY = '8fd940e2f9cf2beaf70655a1fe805e84';
const CITY_NAME = 'Davie'; 

const weatherInfo = document.getElementById('weather-info');

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(1);
}

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const highTemp = kelvinToFahrenheit(data.main.temp_max);
            const lowTemp = kelvinToFahrenheit(data.main.temp_min);
            const forecast = data.weather[0].description;
            const humidity = data.main.humidity;

            const weatherHtml = `
                <h2>${cityName}</h2>
                <p>High Temperature: ${highTemp}°F</p>
                <p>Low Temperature: ${lowTemp}°F</p>
                <p>Forecast: ${forecast}</p>
                <p>Humidity: ${humidity}%</p>
            `;

            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            weatherInfo.innerHTML = 'Error fetching weather data';
            console.error(error);
        });
}

fetchWeatherData();