import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseStyles = "btn";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} style={{ textDecoration: 'none' }}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
