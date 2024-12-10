import React, { useState } from 'react';
import './ConsultantsPage.css';
import SearchBar from '../components/ui/searchbar';
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
  const [selectedConsultant, setSelectedConsultant] = useState(null); // Profiilin avaaminen

  // Tilat uuden konsultin lisäämiseen ja muokkaamiseen
  const [isEditing, setIsEditing] = useState(false); // Muokkaustila
  const [editIndex, setEditIndex] = useState(null); // Muokattavan konsultin ID
  const [formValues, setFormValues] = useState({
    name: '',
    skills: '',
    bio: '',
    contactInfo: '',
    experience: '',
  });

  // Suodatetut konsultit hakua varten
  const filteredConsultants = consultants.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Profiilin avaaminen
  const handleViewProfile = (id) => {
    const consultant = consultants.find((c) => c.id === id);
    setSelectedConsultant(consultant);
  };

  const handleCloseProfile = () => {
    setSelectedConsultant(null); // Sulje profiilikortti
  };

  // Lomakekenttien hallinta
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Lisää konsultti
  const handleAddConsultant = () => {
    if (formValues.name && formValues.skills) {
      const newConsultant = {
        id: consultants.length + 1,
        ...formValues,
        experience: parseInt(formValues.experience || 0, 10), // Varmistaa, että kokemus on numero
      };
      setConsultants([...consultants, newConsultant]);
      setFormValues({ name: '', skills: '', bio: '', contactInfo: '', experience: '' });
    }
  };

  // Muokkaa konsulttia
  const handleEditConsultant = (id) => {
    const consultant = consultants.find((c) => c.id === id);
    setFormValues(consultant);
    setIsEditing(true);
    setEditIndex(id);
  };

  // Tallenna muokkaukset
  const handleSaveEdit = () => {
    setConsultants(
      consultants.map((c) =>
        c.id === editIndex
          ? { ...c, ...formValues, experience: parseInt(formValues.experience || 0, 10) }
          : c
      )
    );
    setIsEditing(false);
    setEditIndex(null);
    setFormValues({ name: '', skills: '', bio: '', contactInfo: '', experience: '' });
  };

  // Poista konsultti
  const handleDeleteConsultant = (id) => {
    setConsultants(consultants.filter((c) => c.id !== id));
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
        <div>
          <div className="consultant-cards">
            {filteredConsultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                name={consultant.name}
                skills={consultant.skills}
                experience={consultant.experience}
                onViewProfile={() => handleViewProfile(consultant.id)}
                onEdit={() => handleEditConsultant(consultant.id)} // Edit-painike
                onDelete={() => handleDeleteConsultant(consultant.id)} // Delete-painike
              />
            ))}
          </div>

          <div className="form-section">
            <h2>{isEditing ? 'Muokkaa Konsulttia' : 'Lisää Uusi Konsultti'}</h2>
            <input
              type="text"
              name="name"
              placeholder="Nimi"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="skills"
              placeholder="Osaamiset"
              value={formValues.skills}
              onChange={handleInputChange}
            />
            <textarea
              name="bio"
              placeholder="Kuvaus"
              value={formValues.bio}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              name="contactInfo"
              placeholder="Yhteystiedot"
              value={formValues.contactInfo}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="experience"
              placeholder="Kokemus (vuotta)"
              value={formValues.experience}
              onChange={handleInputChange}
            />
            {isEditing ? (
              <button onClick={handleSaveEdit}>Tallenna Muutokset</button>
            ) : (
              <button onClick={handleAddConsultant}>Lisää Konsultti</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantsPage;
