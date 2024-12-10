import React from 'react';
import './TeamCard.css';

const TeamCard = ({ teamName, description, members, onEdit, onDelete }) => {
  return (
    <div className="team-card">
      <h3>{teamName}</h3>
      <p>{description}</p>
      <h4>Jäsenet:</h4>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <div className="team-card-actions">
        <button onClick={onEdit}>Muokkaa</button>
        <button onClick={onDelete}>Poista</button>
      </div>
    </div>
  );
};

export default TeamCard;
