// components/Hero.tsx
"use client";
import React, { useState } from 'react';
import TemperatureToggle from '../TemperatureToggle/tempToggle';

const Hero = () => {
  const [isCelsius, setIsCelsius] = useState(true); // setting default to Celsius
  
  const mockWeatherData = {
    temperature: 18.9, // celsius (66°F)
    condition: "Mostly Clear",
    feelsLike: 22.2, // celsius (72°F)
    high: 24.4, // celsius (75°F)
    low: 17.8, // celsius (64°F)
    location: "Accra"
  };

  // Temperature conversion functions
  const celsiusToFahrenheit = (celsius: number) => (celsius * 9/5) + 32;
  
  const getCurrentTemp = () => {
    return isCelsius 
      ? Math.round(mockWeatherData.temperature)
      : Math.round(celsiusToFahrenheit(mockWeatherData.temperature));
  };
  
  const getFeelsLike = () => {
    return isCelsius 
      ? Math.round(mockWeatherData.feelsLike)
      : Math.round(celsiusToFahrenheit(mockWeatherData.feelsLike));
  };
  
  const getHighLow = () => {
    const high = isCelsius 
      ? Math.round(mockWeatherData.high)
      : Math.round(celsiusToFahrenheit(mockWeatherData.high));
    const low = isCelsius 
      ? Math.round(mockWeatherData.low)
      : Math.round(celsiusToFahrenheit(mockWeatherData.low));
    return { high, low };
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const { high, low } = getHighLow();

  return (
    <div 
      className="relative w-full h-[60vh] sm:h-screen flex flex-col overflow-hidden pl-1.5"
      style={{
        backgroundImage: "url('/images/forest-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* content flex */}
      <div className="relative z-20 flex flex-col h-full p-6 sm:p-8">
        
        {/*top lefts ection; Location with Icon */}
        <div className="flex items-start mb-8 pt-4">
          <div className="flex items-center gap-2">
            {/* Location Icon -> a simple SVG*/}
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C2.686 0 0 2.686 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.686 9.314 0 6 0ZM6 8C4.895 8 4 7.105 4 6C4 4.895 4.895 4 6 4C7.105 4 8 4.895 8 6C8 7.105 7.105 8 6 8Z" fill="white"/>
            </svg>
            <span className="text-base font-normal">{mockWeatherData.location}</span>
          </div>
        </div>

        {/* Main Content container - Positioned in lower left, closer to bottom */}
        <div className="mt-auto">
          {/* Large Temperature value with a fixed degree symbol size */}
          <div className="flex items-start mb-3">
            <span className="text-[120px] sm:text-[140px] font-light leading-none tracking-tight">
              {getCurrentTemp()}°
            </span>
            {/* Normal F text, same baseline */}
            <span className="text-[120px] sm:text-[140px] font-light leading-none tracking-tight ml-2">
              {isCelsius ? 'C' : 'F'}
            </span>
          </div>
          
          {/* weather condition */}
          <div className="text-lg font-normal">
            {mockWeatherData.condition}
          </div>
          
          {/* high/low temperatures */}
          <div className="text-sm opacity-80 mt-">
            ↑{high}° ↓{low}°
          </div>
          
          {/* feels like */}
          <div className="text-sm opacity-80 mb-2">
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