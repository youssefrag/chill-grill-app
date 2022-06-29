import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";
import {Button, TextField } from '@mui/material';

export default function LoginPage(props) {

  let navigate = useNavigate();

  const { userContextUserName, setUserName, userContextUserId, setUserId } = useContext(UserContext);

  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser(prev => ({...user, [name]: value}))
  }

  const handleSubmit = () => {
    const { email, password } = user
    if (!email || !password) {
      alert('Empty values!')
      return
    }
    axios.post('http://localhost:8080/api/auth/login', user, {
      withCredentials: true,
    })
    .then((result) => { 
      // console.log('id:', result.data.user.id)
      const userId = result.data.user.id
      const userName = result.data.user.name
      setUserName(userName)
      setUserId(userId)
      navigate("/menu")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <>
      <h1>
        Please login to view menu!
      </h1>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
      >
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
            display: 'block',
          }}
        />
        <TextField
          type="password"
          label="Password"
          name='password'
          color="secondary"
          required
          value={user.password}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            display: 'block',
          }}
        />
        <Button
          variant='contained' 
          size='large'
          onClick={handleSubmit}
          style={{ 
            marginLeft: 20,
          }}
        >
          Login!
        </Button>
      </form>
    </>
  )
}