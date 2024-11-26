const UserList = () => {
    const users = [
      { id: 1, name: 'Matti Meikäläinen', email: 'matti@example.com', role: 'Admin' },
      { id: 2, name: 'Anna Esimerkki', email: 'anna@example.com', role: 'Konsultti' },
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Sähköposti</th>
            <th>Rooli</th>
            <th>Toiminnot</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button>Muokkaa</button>
                <button>Poista</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default UserList;
  