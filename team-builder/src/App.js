import React, { useState } from 'react';
import Team from './components/team'
import Form from './components/form'
import EditTeamForm from './components/editTeamForm'
import './App.css';

function App() {
  const [team, setTeam] = useState([{
    name: 'nick',
    email: 'dont email me',
    role: 'crazy',
    id: 1
  }])
  const initialFormState = { id: null, name: '', email: '', role: '' }

  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)



  const addNewMember = add => {
    const newMember = {
      id: team.length + 1,
      name: add.name,
      email: add.email,
      role: add.role
    }
    setTeam([...team, newMember])
  }

  const deleteMember = id => {
    setTeam(team.filter(team => team.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, email: user.email, role: user.role })
  }

  const updateMember = (id, updatedMember) => {
    setEditing(false)

    setTeam(team.map(member => (member.id === id ? updatedMember : member)))
  }

  return (
    <div className="App">
      {editing ? (
        <div>
          <h2>Edit Member</h2>
          <EditTeamForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateMember={updateMember}
          />
        </div>
      ) : (
          <div>
            <h2>Add Member</h2>
            <Form addNewMember={addNewMember} />
          </div>
        )}

      <Team team={team} deleteMember={deleteMember} editRow={editRow} />
    </div>
  );
}

export default App;
