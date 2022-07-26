import React, { useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';
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

export default function LoginPage(props) {

  const classes = useStyles()

  let navigate = useNavigate();

  const { userContextUserName, setUserName, userContextUserId, setUserId, userContextOrderId, setOrderId, isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);

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
      const userId = result.data.user.id
      const userName = result.data.user.name
      setUserName(userName)
      setUserId(userId)
      setUserLoggedIn(true)
      navigate("/menu")
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
        Please login to view menu!
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

        >
          Login!
        </Button>
      </form>
    </div>
  )
}