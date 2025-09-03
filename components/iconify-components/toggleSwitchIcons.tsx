import React from 'react';
import { Icon } from '@iconify/react';

interface ToggleSwitchProps {
  unitColor?: string;
  isOn: boolean;
  onToggle: () => void;
  onColor?: string;
  offColor?: string;
  size?: number;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  unitColor = '#ffffff',
  isOn, 
  onToggle, 
  onColor = '#C9AA8F', 
  offColor = '#FFFFFF', 
  size = 32,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <button
        onClick={onToggle}
        className= {`transition-all duration-300 hover:scale-105 ${className}`}
      >
        {isOn ? (
          <Icon 
            icon="material-symbols-light:toggle-on-outline" 
            width={size} 
            height={size}
            style={{ color: onColor }}
          />
        ) : (
          <Icon 
            icon="material-symbols-light:toggle-off-outline" 
            width={size} 
            height={size}
            style={{ color: offColor }}
          />
        )}
      </button>
      <span 
        className="text-1xl font-bold transition-colors duration-100"
        style={{ color: isOn ? '#C9AA8F' : unitColor }}
      >
        °F
      </span>
    </div>
  );
};

export default ToggleSwitch;