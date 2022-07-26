import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    border: '1px solid',
    marginLeft: '200px',
    marginRight: '200px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
  },
  title: {
    textAlign: 'center',
    paddingBottom: '40px'
  },
  field: {
    width: '400px',
  }
})

export default function RegistrationPage() {

  const classes = useStyles()

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

  const handleSubmit = () => {
    const { name, email, password } = user
    if (!name || !email || !password) {
       alert('Empty values!')
       return
    }
    axios.post('http://localhost:8080/api/auth/register', user, {
       withCredentials: true,
    })
    .then((result) => { 
       console.log(result.data)
       navigate("/login")
    })
    .catch((error) => {
       console.log(error)
    })
 }

  return(
    <div className={classes.form}>
      <Typography
        variant='h3'
        className={classes.title}
      >
        Registration Page
      </Typography>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TextField
          type="text"
          label="Name"
          name='name'
          color="secondary"
          required
          value={user.name}
          onChange={handleChange}
          className={classes.field}
          sx={{
            marginBottom: '20px'
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
          className={classes.field}
          sx={{
            marginBottom: '20px'
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
          className={classes.field}
          sx={{
            marginBottom: '20px'
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
          Register!
        </Button>
      </form>
    </div>
  )
}

