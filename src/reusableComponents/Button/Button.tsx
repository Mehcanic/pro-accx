import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {

  const baseStyles = 'px-4 py-2 text-white transition-colors duration-300';
  const primaryStyles = 'border hover:bg-secondary hover:text-secondaryText';
  const secondaryStyles = 'border hover:bg-secondary hover:text-secondaryText';


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
