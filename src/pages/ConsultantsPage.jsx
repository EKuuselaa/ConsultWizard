import React, { useState, useEffect } from 'react';
import './ConsultantsPage.css';
import SearchBar from '../components/ui/searchbar';
import Table from '../components/ui/Table';

const ConsultantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [consultants, setConsultants] = useState([
    { name: 'Kalle Konsultti', skills: 'React, Node.js' },
    { name: 'Liisa Laakso', skills: 'Java, Spring' },
  ]);

  const filteredConsultants = consultants.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = ['name', 'skills'];

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
      ) : (
        <Table columns={columns} data={filteredConsultants} />
      )}
    </div>
  );
};

export default ConsultantsPage;