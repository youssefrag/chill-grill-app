import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";
import {Button, TextField } from '@mui/material';

export default function RegistrationPage() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email:'',
    password:'',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser(prev => ({...user, [name]: value}))
  }

  return(
    <>
      <h1>
        Registration Page!
      </h1>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
      >
        <TextField
          type="text"
          label="Name"
          name='name'
          color="secondary"
          required
          value={user.name}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 100000000000000,
            display: 'block',
            width: '100000px',
          }}
        />
        <TextField
          type="text"
          label="Email"
          name='email'
          color="secondary"
          required
          value={user.email}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 100000000000000,
            display: 'block',
            width: '100000px',
          }}
        />
      </form>
    </>
  )
}

