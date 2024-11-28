const ConsultantCard = ({ consultant }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>{consultant.name}</h3>
      <p><strong>Osaaminen:</strong> {consultant.skills.join(', ')}</p>
      <p><strong>Kokemus:</strong> {consultant.experience} vuotta</p>
      <button style={{ marginRight: '10px' }}>Näytä profiili</button>
      <button>Muokkaa</button>
    </div>
  );
};

export default ConsultantCard