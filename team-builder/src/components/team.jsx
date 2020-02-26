import React from 'react'

const Team = (props) => {
    console.log(props)
    return (
        <div>
            {props.team.map(item => (
                <div>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Role: {item.role}</p>
                    <button onClick={() => props.editRow(item)}>edit</button>
                    <button onClick={() => props.deleteMember(item.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Team