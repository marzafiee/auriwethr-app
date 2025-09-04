import React from 'react';
import { Eye, Droplets, Wind } from 'lucide-react'; // found some cool replicas of the icons I had

interface WeatherDetailsProps {
  weatherData: any; // accepting the API data
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  
  // Transform API data for weather details
  const getDetailedWeatherData = () => {
    if (!weatherData) return null;
    
    return {
      visibility: weatherData.visibility ? Math.round(weatherData.visibility / 1000) : 8, // convert m to km, fallback to 8
      humidity: weatherData.main?.humidity || 90, // percentage, fallback to 90
      windSpeed: weatherData.wind?.speed ? Math.round(weatherData.wind.speed * 2.237) : 6, // convert m/s to mph, fallback to 6
      windDirection: getWindDirection(weatherData.wind?.deg) || "WSW", // fallback to WSW
      sunrise: weatherData.sys?.sunrise ? formatTime(weatherData.sys.sunrise) : "6:30 AM", // fallback to 6:30 AM
      sunset: weatherData.sys?.sunset ? formatTime(weatherData.sys.sunset) : "9:00 PM", // fallback to 9:00 PM
      forecast: weatherData.weather?.[0]?.description ? 
        capitalizeFirstLetter(weatherData.weather[0].description) : 
        "Morning clouds followed by afternoon sun" // fallback forecast
    };
  };

  // function to convert wind degrees to direction
  const getWindDirection = (degrees: number): string => {
    if (!degrees && degrees !== 0) return "";
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[Math.round(degrees / 22.5) % 16];
  };

  // function to convert Unix timestamp to time string
  const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };

  // function to capitalize first letter of description
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const detailsData = getDetailedWeatherData();

  // If there is no weather data, show loading or fallback
  if (!detailsData) {
    return (
      <div className="w-full max-w-lg mx-auto sm:max-w-lg md:max-w-xl space-y-4 text-white text-center">
        Loading weather details...
      </div>
    );
  }

  const {
    visibility,
    humidity,
    windSpeed,
    windDirection,
    sunrise,
    sunset,
    forecast
  } = detailsData;

  return (
    <div className="w-full max-w-lg mx-auto sm:max-w-lg md:max-w-xl space-y-4">
      {/* forecast card */}
      <div className="bg-[#4D3C2E]/69 rounded-[22px] p-4 relative border border-white/[0.03] stroke-white/3">
        <p className="text-white font-light text-base mb-4 opacity-90">
          {forecast}
        </p>
        <div className="mb-2">
          <div className="h-px bg-gradient-to-r from-[#FFFFFF] to-[#4D3C2E]/69 opacity-80" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm font-light">See more</span>
          <svg 
            className="w-4 h-4 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Weather Metrics' Card Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Visibility */}
        <div className="bg-[#4D3C2E]/69 rounded-[22px] p-4 text-white relative border border-white/[0.03] stroke-white/3">
          <div className="flex justify-end">
            <Eye className="w-5 h-5 text-white/70" />
          </div>
          <div className="text-[48px] font-light mb-2 leading-none tracking-tight">
            {visibility}
            <span className="text-base font-normal ml-2">km</span>
          </div>
          <div className="text-white/80 text-sm font-light">Visibility</div>
        </div>

        {/* humidity card */}
        <div className="bg-[#4D3C2E]/69 rounded-[22px] p-4 text-white relative border border-white/[0.03] stroke-white/3">
          <div className="flex justify-end">
            <Droplets className="w-5 h-5 text-white/70" />
          </div>
          <div className="text-[48px] font-light mb-2 leading-none tracking-tight">
            {humidity}
            <span className="text-base font-normal ml-2">%</span>
          </div>
          <div className="text-white/80 text-sm font-light">Humidity</div>
        </div>

        {/* wind details card */}
        <div className="bg-[#131313] rounded-[22px] p-4 text-white relative border border-white/[0.1] stroke-white/9">
          <div className="flex justify-end mb-3">
            <Wind className="w-5 h-5 text-white/70" />
          </div>
          <div className="mb-3 flex items-baseline">
            <span className="text-[48px] mt-4 font-light leading-none tracking-tight">{windSpeed}</span>
            <span className="text-sm font-medium ml-2">mph, {windDirection}</span>
          </div>
          <div className="text-white/80 text-sm font-light">Wind</div>
        </div>

        {/* sunrise and sunset card*/}
        <div className="bg-[#131313] rounded-[22px] p-4 text-white relative border border-white/[0.1] stroke-white/9">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[#D9D9D9] text-xs font-light">Sunrise ↗</span>
            </div>
            <div className="text-[20px] font-bold mb-3">{sunrise}</div>
          </div>
          
        {/* sun arc visualization */}
        <div className="mb-2 relative h-8">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 100 40" 
            fill="none"
          >
            {/* gradient definition for arc line */}
            <defs>
              <linearGradient id="sunArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            
            {/* Arc path of the day */}
            <path
              d="M 10 30 Q 50 5 90 30"
              stroke="url(#sunArcGradient)"
              strokeWidth="4"
              fill="none"
            />
            {/* sun position - the circle */}
            <circle
              cx="30"
              cy="12"
              r="2"
              fill="rgba(255,255,255,0.8)"
            />
          </svg>
        </div>

          <div>
            <div className="flex items-center justify-end">
              <span className="text-[#D9D9D9] text-xs font-light">↙ Sunset</span>
            </div>
              <div className="flex items-center justify-end text-lg font-bold">{sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated WeatherApp to accept weatherData prop
interface WeatherAppProps {
  weatherData: any;
}

const WeatherApp: React.FC<WeatherAppProps> = ({ weatherData }) => {
  return (
    <div 
      className="flex items-center justify-center p-2 relative rounded-t-[49px]"
      style={{
        background: 'linear-gradient(to bottom, #3F2D1E 0%, #000000 73%)'
      }}
    >      
      <div className="relative z-20 w-full pt-4 px-4">
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  );
};

export default WeatherApp;