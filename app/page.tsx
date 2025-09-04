"use client";
import React, { useEffect } from 'react'
import Home from '../components/Home'

// this is the main component for the home page
const HomePage = () => {
    const [WeatherData, setWeatherData] = React.useState(null);

    useEffect(() => {
      getWeatherData("Accra");
    }, []);

  const getWeatherData = async (city: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  return (
    <div>
      <Home weatherData={WeatherData} />
    </div>
  );
};

export default HomePage;