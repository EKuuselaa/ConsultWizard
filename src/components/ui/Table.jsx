import React from 'react';

const Table = ({ columns, data }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  };

  const headerStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'left',
    padding: '10px',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={headerStyle}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} style={cellStyle}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
