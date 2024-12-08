import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ name, skills, experience, onViewProfile, onEdit }) => {
  return (
    <div className="consultant-card">
      <div className="consultant-card__title">{name}</div>
      <div className="consultant-card__skills">Osaamisalueet: {skills}</div>
      <div className="consultant-card__experience">Kokemus: {experience} vuotta</div>
      <button className="consultant-card__button" onClick={onViewProfile}>Näytä profiili</button>
      <button className="consultant-card__button consultant-card__button--edit" onClick={onEdit}>
        Muokkaa
      </button>
    </div>
  );
};

export default ConsultantCard;
