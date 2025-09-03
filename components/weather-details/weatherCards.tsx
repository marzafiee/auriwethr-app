import React from 'react';
import { Eye, Droplets, Wind } from 'lucide-react'; // found some cool replicas of the icons I had

interface WeatherDetailsProps {
  visibility?: number; // in km
  humidity?: number; // percentage
  windSpeed?: number; // in mph
  windDirection?: string;
  sunrise?: string; // time string
  sunset?: string; // time string
  forecast?: string; // e.g., "Morning clouds followed by afternoon sun"
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  visibility = 8,
  humidity = 90,
  windSpeed = 6,
  windDirection = "WSW",
  sunrise = "6:30 AM",
  sunset = "9:00 PM",
  forecast = "Morning clouds followed by afternoon sun"
}) => {
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
          <div className="flex justify-end mb-3">
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
          <div className="flex justify-end mb-3">
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

const WeatherApp = () => {
  return (
    <div 
      className="flex items-center justify-center p-2 relative rounded-t-[49px]"
      style={{
        background: 'linear-gradient(to bottom, #3F2D1E 0%, #000000 73%)'
      }}
    >      
      <div className="relative z-20 w-full pt-4 px-4">
        <WeatherDetails 
          visibility={8}
          humidity={90}
          windSpeed={6}
          windDirection="WSW"
          sunrise="6:30 AM"
          sunset="9:00 PM"
          forecast="Morning clouds followed by afternoon sun"
        />
      </div>
    </div>
  );
};

export default WeatherApp;

