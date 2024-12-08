import React, { useState, useEffect } from 'react';
import './ConsultantsPage.css';
import SearchBar from '../components/ui/SearchBar';
import Table from '../components/ui/Table';
import ConsultantCard from '../components/cards/ConsultantCard';
import ProfileCard from '../components/cards/ProfileCard';

const ConsultantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [consultants, setConsultants] = useState([
    { id: 1, name: 'Kalle Konsultti', skills: 'React, Node.js', bio: 'Kokenut React-kehittäjä', contactInfo: 'kalle@example.com', experience: 5 },
    { id: 2, name: 'Liisa Laakso', skills: 'Java, Spring', bio: 'Spring-asiantuntija ja ohjelmistokehittäjä', contactInfo: 'liisa@example.com', experience: 3 },
  ]);

  const [selectedConsultant, setSelectedConsultant] = useState(null); // Profiilin avaamiseksi

  const filteredConsultants = consultants.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = ['name', 'skills'];

  // Toiminto, kun konsultin profiili avataan
  const handleViewProfile = (id) => {
    const consultant = consultants.find((c) => c.id === id);
    setSelectedConsultant(consultant);
  };

  const handleCloseProfile = () => {
    setSelectedConsultant(null); // Sulkee profiilikortin
  };

  return (
    <div>
      <h1>Konsulttien Hallinta</h1>
      <SearchBar
        placeholder="Hae konsulttia..."
        value={searchTerm}
        onChange={setSearchTerm}
      />
      
      {isLoading ? (
        <Spinner />
      ) : selectedConsultant ? (
        // Näytetään ProfileCard, jos konsultti on valittu
        <div>
          <ProfileCard
            name={selectedConsultant.name}
            skills={selectedConsultant.skills}
            bio={selectedConsultant.bio}
            contactInfo={selectedConsultant.contactInfo}
          />
          <button onClick={handleCloseProfile} className="close-profile-button">
            Sulje
          </button>
        </div>
      ) : (
        // Näytetään ConsultantCard-lista, jos profiilia ei ole valittu
        <div className="consultant-cards">
          {filteredConsultants.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              name={consultant.name}
              skills={consultant.skills}
              experience={consultant.experience}
              onViewProfile={() => handleViewProfile(consultant.id)} // Profiilin katselutoiminto
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultantsPage;
