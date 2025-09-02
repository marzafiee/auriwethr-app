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
      className="relative w-full h-[60vh] sm:h-screen flex flex-col text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/forest-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full p-6 sm:p-8">
        
        {/* Top Section - Location with Icon */}
        <div className="flex items-start mb-8 pt-4">
          <div className="flex items-center gap-2">
            {/* Location Icon - using a simple SVG for now */}
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C2.686 0 0 2.686 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.686 9.314 0 6 0ZM6 8C4.895 8 4 7.105 4 6C4 4.895 4.895 4 6 4C7.105 4 8 4.895 8 6C8 7.105 7.105 8 6 8Z" fill="white"/>
            </svg>
            <span className="text-base font-normal">{mockWeatherData.location}</span>
          </div>
        </div>

        {/* Main Content - Positioned in lower left, closer to bottom */}
        <div className="mt-auto mb-8">
          {/* Large Temperature Display - Fixed degree symbol size */}
          <div className="flex items-start mb-3">
            <span className="text-[120px] sm:text-[140px] font-light leading-none tracking-tight">
              {getCurrentTemp()}°
            </span>
            {/* Normal F text, same baseline */}
            <span className="text-[120px] sm:text-[140px] font-light leading-none tracking-tight ml-2">
              {isCelsius ? 'C' : 'F'}
            </span>
          </div>
          
          {/* Weather Condition */}
          <div className="text-lg font-light mb-2 opacity-90">
            {mockWeatherData.condition}
          </div>
          
          {/* High/Low */}
          <div className="text-sm opacity-80 mb-2">
            ↑{high}° ↓{low}°
          </div>
          
          {/* Feels Like */}
          <div className="text-sm opacity-80 mb-6">
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