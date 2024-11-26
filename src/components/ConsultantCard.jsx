const ConsultantCard = ({ consultant }) => (
    <div>
      <h3>{consultant.name}</h3>
      <p>Osaaminen: {consultant.skills.join(', ')}</p>
      <p>Kokemus: {consultant.experience} vuotta</p>
    </div>
  );
  
  const ConsultantsPage = () => {
    const consultants = [
      { id: 1, name: 'Kalle Konsultti', skills: ['React', 'Node.js'], experience: 5 },
      { id: 2, name: 'Liisa Laakso', skills: ['Java', 'Spring'], experience: 8 },
    ];
  
    return (
      <div>
        {consultants.map(c => (
          <ConsultantCard key={c.id} consultant={c} />
        ))}
      </div>
    );
  };
  export default ConsultantsPage;
  