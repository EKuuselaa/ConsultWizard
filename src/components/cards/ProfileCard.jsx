import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, skills, bio, contactInfo }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__name">{name}</div>
      <div className="profile-card__skills"><strong>Osaamisalueet:</strong> {skills}</div>
      <div className="profile-card__bio"><strong>Bio:</strong> {bio}</div>
      <div className="profile-card__contact">
        <strong>Yhteystiedot:</strong>
        <p>{contactInfo}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
