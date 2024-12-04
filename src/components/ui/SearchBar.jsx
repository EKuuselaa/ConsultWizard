import React from 'react';

const SearchBar = ({ placeholder = 'Hae...', value, onChange }) => {
  const inputStyle = {
    padding: '10px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
    />
  );
};

export default SearchBar;
