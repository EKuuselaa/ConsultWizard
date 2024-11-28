import React, { useState, useEffect } from 'react';
import ConsultantCard from '../components/ConsultantCard';

const ConsultantsPage = () => {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simuloitu data
  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Kalle Konsultti', skills: ['React', 'Node.js'], experience: 5 },
      { id: 2, name: 'Liisa Laakso', skills: ['Java', 'Spring'], experience: 8 },
    ];
    setConsultants(mockData);
  }, []);


  //hakutoiminto konsulteille

  const filteredConsultants = consultants.filter((consultants) =>
    consultants.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Konsultit</h1>

      {/* Hakukenttä */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Hae konsulttia nimellä..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button style={{ padding: '10px 20px' }}>Lisää konsultti</button>
      </div>

      {/* Konsulttilista kortteina */}
      <div>
        {filteredConsultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default ConsultantsPage;