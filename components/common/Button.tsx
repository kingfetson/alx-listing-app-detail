import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md', 
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {

  // Define Tailwind classes based on size prop
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-[13.5px]',
    large: 'px-6 py-3 text-lg',
  };

  // Define Tailwind classes based on shape prop
  const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Combine base styles with size, shape, and any custom classes
  const combinedClasses = `
    bg-transparent text-[#222222] font-semibold border border-gray-400
    hover:bg-emerald-100 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50
    transition-colors duration-200
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${className}
  `.trim(); 

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...rest} 
    >
      {children}
    </button>
  );
};

export default Button;