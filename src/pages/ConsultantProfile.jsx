import React from 'react';
import './ConsultantProfile.css';

const ProfileCard = ({ consultant, onClose }) => {
  if (!consultant) {
    return <p>Konsultin tietoja ei ole saatavilla.</p>;
  }

  return (
    <div className="consultant-profile">
      <h2>{consultant.name}</h2>
      <p><strong>Osaamisalueet:</strong> {consultant.skills}</p>
      <p><strong>Kokemus:</strong> {consultant.experience} vuotta</p>
      <p><strong>Bio:</strong> {consultant.bio}</p>
      <p><strong>Yhteystiedot:</strong> {consultant.contactInfo}</p>
      <button onClick={onClose} className="consultant-profile__close-button">Sulje</button>
    </div>
  );
};

export default ProfileCard;
