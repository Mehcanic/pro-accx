import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {

  const baseStyles = 'px-4 py-2 rounded-md text-white transition-colors duration-300';
  const primaryStyles = 'bg-blue-500 hover:bg-blue-600 ';
  const secondaryStyles = 'bg-gray-500 hover:bg-gray-600';


  const styles = 
    variant === 'primary' 
      ? `${baseStyles} ${primaryStyles}` 
      : `${baseStyles} ${secondaryStyles}`;
  
  return (
    <button className={`${styles} ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button