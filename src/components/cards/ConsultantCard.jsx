import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ name, skills, experience }) => {
  return (
    <div className="consultant-card">
      <div className="consultant-name">{name}</div>
      <div className="consultant-skills">Skills: {skills.join(', ')}</div>
      <div className="consultant-experience">Experience: {experience} years</div>
    </div>
  );
};

export default ConsultantCard;