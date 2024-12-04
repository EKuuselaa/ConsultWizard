import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: '3px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    borderTopColor: '#007bff',
    animation: 'spin 1s linear infinite',
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </>
  );
};

export default Spinner;
