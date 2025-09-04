"use client";
import React, { useState } from 'react';
import TemperatureToggle from '../TemperatureToggle/tempToggle';

interface HeroProps {
  weatherData: any;
}

const Hero: React.FC<HeroProps> = ({ weatherData }) => {
  const [isCelsius, setIsCelsius] = useState(true); // setting default to Celsius
  
  // arrow function to transform the API data to match the expected structure
  const getWeatherData = () => {
    if (!weatherData) return null;
    return {
      temperature: weatherData.main.temp,
      condition: weatherData.weather[0].main,
      feelsLike: weatherData.main.feels_like,
      high: weatherData.main.temp_max,
      low: weatherData.main.temp_min,
      location: "Accra"
    };
  };

  // display the data
  const displayData = getWeatherData();

  if (!displayData) {
    return (
      <div className="relative w-full h-[45vh] sm:h-screen flex flex-col overflow-hidden pl-1.5"
        style={{
          backgroundImage: "url('/images/forest-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-20 flex flex-col h-full p-6 sm:p-8 ">
          <div className="mt-auto text-white text-2xl">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  // Temperature conversion functions
  const celsiusToFahrenheit = (celsius: number) => (celsius * 9/5) + 32;
  
  const getCurrentTemp = () => {
    return isCelsius 
      ? Math.round(displayData.temperature)
      : Math.round(celsiusToFahrenheit(displayData.temperature));
  };
  
  const getFeelsLike = () => {
    return isCelsius 
      ? Math.round(displayData.feelsLike)
      : Math.round(celsiusToFahrenheit(displayData.feelsLike));
  };
  
  const getHighLow = () => {
    const high = isCelsius 
      ? Math.round(displayData.high)
      : Math.round(celsiusToFahrenheit(displayData.high));
    const low = isCelsius 
      ? Math.round(displayData.low)
      : Math.round(celsiusToFahrenheit(displayData.low));
    return { high, low };
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const { high, low } = getHighLow();

  return (
    <div 
      className="relative w-full h-[45vh] sm:h-screen flex flex-col overflow-hidden pl-1.5"
      style={{
        backgroundImage: "url('/images/forest-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* content flex */}
      <div className="relative z-20 flex flex-col h-full p-6 sm:p-8 ">
        
        {/*top left section; Location with Icon */}
        <div className="flex items-start mb-8 pt-4 sm:mb- md:mb- lg:mb-30">
          <div className="flex items-center gap-2">
            {/* Location Icon -> a simple SVG*/}
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C2.686 0 0 2.686 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.686 9.314 0 6 0ZM6 8C4.895 8 4 7.105 4 6C4 4.895 4.895 4 6 4C7.105 4 8 4.895 8 6C8 7.105 7.105 8 6 8Z" fill="white"/>
            </svg>
            <span className="text-base font-normal">{displayData.location}</span>
          </div>
        </div>

        {/* Main Content container - Positioned in lower left, closer to bottom */}
        <div className="mt-auto">
          {/* Large Temperature value with a fixed degree symbol size */}
          <div className="flex items-start mb-3">
            <span className="text-[120px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-normal leading-none tracking-tight">
              {getCurrentTemp()}°
            </span>
            {/* small F text, same baseline */}
            <div className="self-start mt-13 sm:mt-16 lg:mt-16">  
              <span className="text-[60px] sm:text-[65px] md:text-[80px] lg:text-[120px] font-light leading-none tracking-tight ml-2">
                {isCelsius ? 'C' : 'F'}
              </span>
            </div>
          </div>
          
          {/* weather condition */}
          <div className="text-lg font-normal sm:text-[22px] md:text-[26px] lg:text-[30px]">
            {displayData.condition}
          </div>
          
          {/* high/low temperatures */}
          <div className="text-sm opacity-80 sm:text-[16px] md:text-[20px] lg:text-[24px]">
            ↑{high}° ↓{low}°
          </div>
          
          {/* feels like */}
          <div className="text-sm opacity-80 mb-2 sm:text-[16px] md:text-[20px] lg:text-[24px]">
            Feels like {getFeelsLike()}°
          </div>

          {/* Temperature Toggle Component */}
          <TemperatureToggle 
            isCelsius={isCelsius}
            onToggle={toggleTemperatureUnit}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;