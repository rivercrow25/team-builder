import React, { useState, useReducer } from 'react'

const EditTeamForm = props => {
    const [member, setMember] = useState(props.currentUser)

    const handleInputChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }
    return (
        <form onSubmit={event => {
            event.preventDefault()

            props.updateMember(member.id, member)
        }}>
            <label htmlFor="name">Edit Name</label>
            <input type="text" name='name' id='name' onChange={handleInputChange} value={member.name} />
            <label htmlFor="email">Edit Name</label>
            <input type="text" name='email' id='email' onChange={handleInputChange} value={member.email} />
            <label htmlFor="role">Edit Name</label>
            <input type="text" name='role' id='role' onChange={handleInputChange} value={member.role} />
            <button type='submit'>Update Team Member</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditTeamForm