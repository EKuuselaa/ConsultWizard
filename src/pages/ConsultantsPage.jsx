const ConsultantsPage = () => {
  const consultants = [
    { id: 1, name: 'Kalle Konsultti', skills: ['React', 'Node.js'], experience: 5 },
    { id: 2, name: 'Liisa Laakso', skills: ['Java', 'Spring'], experience: 8 },
  ];

  return (
    <div>
      <h1>Konsultit</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nimi</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Osaamisalueet</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Kokemus</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Toiminnot</th>
          </tr>
        </thead>
        <tbody>
          {consultants.map((consultant) => (
            <tr key={consultant.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{consultant.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {consultant.skills.join(', ')}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {consultant.experience} vuotta
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button style={{ marginRight: '10px' }}>Näytä profiili</button>
                <button>Muokkaa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultantsPage;
