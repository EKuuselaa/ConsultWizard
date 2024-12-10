import React, { useState } from 'react';
import './TeamManagementPage.css';

const TeamManagementPage = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'React-tiimi', members: ['Kalle Konsultti', 'Liisa Laakso'] },
    { id: 2, name: 'Java-tiimi', members: ['Matti Meikäläinen'] },
  ]);
  const [newTeamName, setNewTeamName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newMemberName, setNewMemberName] = useState('');

  // Luo uusi tiimi
  const handleCreateTeam = () => {
    if (newTeamName.trim() === '') return;
    const newTeam = {
      id: Date.now(),
      name: newTeamName,
      members: [],
    };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
    setNewTeamName('');
  };

  // Valitse tiimi muokattavaksi
  const handleSelectTeam = (teamId) => {
    const team = teams.find((t) => t.id === teamId);
    setSelectedTeam(team);
  };

  // Lisää jäsen valittuun tiimiin
  const handleAddMember = () => {
    if (!selectedTeam || newMemberName.trim() === '') return;
    const updatedTeam = {
      ...selectedTeam,
      members: [...selectedTeam.members, newMemberName],
    };
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team))
    );
    setSelectedTeam(updatedTeam);
    setNewMemberName('');
  };

  // Poista jäsen tiimistä
  const handleRemoveMember = (memberName) => {
    if (!selectedTeam) return;
    const updatedTeam = {
      ...selectedTeam,
      members: selectedTeam.members.filter((member) => member !== memberName),
    };
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team))
    );
    setSelectedTeam(updatedTeam);
  };

  // Poistu tiimin muokkaustilasta
  const handleDeselectTeam = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="team-management-page">
      <h1>Tiimien Hallinta</h1>

      {/* Tiimin luominen */}
      <div className="create-team">
        <h2>Luo Uusi Tiimi</h2>
        <input
          type="text"
          placeholder="Tiimin nimi"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
        />
        <button onClick={handleCreateTeam}>Luo Tiimi</button>
      </div>

      {/* Tiimien lista */}
      <div className="team-list">
        <h2>Tiimit</h2>
        {teams.length > 0 ? (
          <ul>
            {teams.map((team) => (
              <li key={team.id}>
                {team.name}
                <button onClick={() => handleSelectTeam(team.id)}>Muokkaa</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ei tiimejä.</p>
        )}
      </div>

      {/* Valitun tiimin muokkaus */}
      {selectedTeam && (
        <div className="team-edit">
          <h2>Muokkaa Tiimiä: {selectedTeam.name}</h2>
          <button onClick={handleDeselectTeam} className="back-button">
            Takaisin
          </button>

          <div className="team-members">
            <h3>Jäsenet</h3>
            {selectedTeam.members.length > 0 ? (
              <ul>
                {selectedTeam.members.map((member, index) => (
                  <li key={index}>
                    {member}
                    <button
                      onClick={() => handleRemoveMember(member)}
                      className="remove-member-button"
                    >
                      Poista
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ei jäseniä.</p>
            )}
          </div>

          <div className="add-member">
            <h3>Lisää Jäsen</h3>
            <input
              type="text"
              placeholder="Jäsenen nimi"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
            />
            <button onClick={handleAddMember}>Lisää</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagementPage;
