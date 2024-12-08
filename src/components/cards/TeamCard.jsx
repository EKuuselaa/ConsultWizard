import React from 'react';
import './TeamCard.css';

const TeamCard = ({ teamName, members, project, onViewTeam }) => {
  return (
    <div className="team-card">
      <div className="team-card__title">{teamName}</div>
      <div className="team-card__details">Jäseniä: {members}</div>
      <div className="team-card__details">Projekti: {project}</div>
      <button className="team-card__button" onClick={onViewTeam}>Näytä tiimi</button>
    </div>
  );
};

export default TeamCard;
