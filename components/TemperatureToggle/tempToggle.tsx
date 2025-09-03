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
      className="inline-flex items-start px-3 rounded-2xl border border-white/40"
      style={{
        background: 'rgba(63, 45, 30, 0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {/* Toggle Switch Component - the on and off buttons and the text label */}
      <ToggleSwitch
        isOn={!isCelsius}
        onToggle={onToggle}
        onColor="#C9AA8F"
        offColor="#FFFFFF"
        size={32}
      />
    </div>
  );
};

export default TemperatureToggle;