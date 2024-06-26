// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = '5cfcf5cf98e3762f1d3a7f9eec11fd0c';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Enter city" />
        <button type="submit">Get Weather</button>
      </form>
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
