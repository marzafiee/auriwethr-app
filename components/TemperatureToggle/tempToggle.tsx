"use client";
import React from 'react';
import ToggleSwitch from '../iconify-components/toggleSwitchIcons';

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
      {/* Toggle Switch Component */}
      <ToggleSwitch
        isOn={isCelsius}
        onToggle={onToggle}
        onColor="#fff"
        offColor="#C9AA8F"
        size={32}
      />
      
      {/* Unit label - separate from button */}
      <span className="text-sm font-light text-white">
        °F
      </span>
    </div>
  );
};

export default TemperatureToggle;