const apiKey = 'YOUR_API_KEY';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const locationInput = document.getElementById('locationInput').value;
  const weatherData = document.getElementById('weatherData');

  // Clear previous weather data

weatherData.innerHTML = '';

  // Make a request to Ambee's Weather API
  fetch
  // Display the weather data
const weatherHTML = `
<p>Temperature: ${temperature}°C</p>
<p>Humidity: ${humidity}%</p>
<p>Description: ${description}</p>
`;
weatherData.innerHTML = weatherHTML; })