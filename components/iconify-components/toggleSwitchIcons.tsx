import React from 'react';
import { Icon } from '@iconify/react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  onColor?: string;
  offColor?: string;
  size?: number;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  isOn, 
  onToggle, 
  onColor = '#fff', 
  offColor = '#C9AA8F', 
  size = 24,
  className = ''
}) => {
  return (
    <button
      onClick={onToggle}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
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
  );
};

export default ToggleSwitch;