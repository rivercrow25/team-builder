import React, { useState } from 'react'

const Form = (props) => {
    console.log(props)
    const [data, setData] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handlechange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(data)
        setData({ name: '', email: '', role: '' })
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input onChange={handlechange} name='name' id='name' input='text' value={data.name} />
            <label htmlFor='email'>Email</label>
            <input onChange={handlechange} name='email' id='email' type="text" value={data.email} />
            <label htmlFor="role">Role</label>
            <input onChange={handlechange} name='role' id='role' type="text" value={data.role} />
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form