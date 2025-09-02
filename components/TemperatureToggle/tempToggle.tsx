// components/TemperatureToggle.tsx
"use client";
import React from 'react';

interface TemperatureToggleProps {
  isCelsius: boolean;
  onToggle: () => void;
}

const TemperatureToggle: React.FC<TemperatureToggleProps> = ({ isCelsius, onToggle }) => {
  return (
    <div 
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/40"
      style={{
        background: 'rgba(63, 45, 30, 0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {/* Toggle Button using Iconify icons */}
      <button
        onClick={onToggle}
        className="transition-all duration-300 hover:scale-105"
      >
        {isCelsius ? (
          // Default Celsius - WHITE toggle icon
          <span 
            className="icon-[material-symbols-light--toggle-on-outline] text-3xl" 
            style={{ color: '#fff' }}
          />
        ) : (
          // Fahrenheit mode - BROWN toggle icon
          <span 
            className="icon-[material-symbols-light--toggle-off-outline] text-3xl" 
            style={{ color: '#C9AA8F' }}
          />
        )}
      </button>
      
      {/* Temperature Unit Label - Always shows °F */}
      <span className="text-sm font-light text-white">
        °F
      </span>
    </div>
  );
};

export default TemperatureToggle;