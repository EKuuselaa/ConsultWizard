import React from 'react';
const Button = ({ text, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    disabled: {
      backgroundColor: '#ccc',
      color: '#666',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'not-allowed',
    },
  };

  const style = disabled ? buttonStyles.disabled : buttonStyles[variant];

  return (
    <button type={type} style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
