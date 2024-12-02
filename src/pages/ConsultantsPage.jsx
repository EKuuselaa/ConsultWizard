import React, { useState, useEffect } from 'react';
import ConsultantCard from '../components/ConsultantCard';
import './ConsultantsPage.css';

const ConsultantsPage = () => {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Kalle Konsultti', skills: ['React', 'Node.js'], experience: 5 },
      { id: 2, name: 'Liisa Laakso', skills: ['Java', 'Spring'], experience: 8 },
    ];
    setConsultants(mockData);
  }, []);

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Konsultit</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Hae konsulttia nimellä..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Lisää konsultti</button>
      </div>
      <ul className="consultant-list">
        {filteredConsultants.map((consultant) => (
          <li key={consultant.id} className="consultant-item">
            <ConsultantCard
              name={consultant.name}
              skills={consultant.skills}
              experience={consultant.experience}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultantsPage;