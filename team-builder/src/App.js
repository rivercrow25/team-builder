import React, { useState } from 'react';
import Team from './components/team'
import Form from './components/form'
import './App.css';

function App() {
  const [team, setTeam] = useState([{
    name: 'nick',
    email: 'dont email me',
    role: 'crazy'
  }])
  const addNewMember = add => {
    const newMember = {
      id: Date.now(),
      name: add.name,
      email: add.email,
      role: add.role
    }
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Team team={team} />
    </div>
  );
}

export default App;
