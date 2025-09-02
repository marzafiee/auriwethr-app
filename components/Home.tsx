import React from 'react';
import Hero from "./Hero/Hero";
import WeatherApp from "./weather-details/weatherCards";
import TemperatureToggle from './TemperatureToggle/tempToggle';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Hero />
      </div>
      <div className='px-0' style={{marginTop: '0px'}}>
        <WeatherApp />
      </div>
    </div>
  );
};

export default Home;