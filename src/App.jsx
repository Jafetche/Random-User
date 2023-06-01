import React, { useState } from 'react';
import './App.css';

import Title from './components/Title';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  const newUser = async () => {
    const respuesta = await fetch('https://randomuser.me/api/?gender=female');
    const { results } = await respuesta.json();
    const newUser = { ...results[0], activo: true };
    setUsers([newUser, ...users]);
  };

  const cambiarActivo = (id) => {
    const newUsers = users.map((user) =>
      user.login.uuid === id ? { ...user, activo: !user.activo } : user
    );
    setUsers(newUsers);
  };

  const deleteUsers = () => {
    const newUsers = users.filter((user) => !user.activo);
    setUsers(newUsers);
  };

  return (
    <div className="app">
      <Title newUser={newUser} deleteUsers={deleteUsers} />
      <div className="container">
        <UsersList users={users} cambiarActivo={cambiarActivo} />
      </div>
    </div>
  );
};

export default App;
