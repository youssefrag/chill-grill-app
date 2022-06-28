import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { UserContext } from "../context/userContext";

import {Button, Typography, AppBar, Toolbar, Stack } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Navbar(props) {

  const { userContextUserName, setUserName } = useContext(UserContext)

  let navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:8080/api/auth/logout', {
      withCredentials: true,
    })
    .then(() => {
      setUserName('')
      navigate("/login")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  if (userContextUserName) {
    return(
      <AppBar 
      color='secondary'
    >
      <Toolbar style={{ width:'100%', display: 'inline-flex', justifyContent: 'space-between' }}>
        <Button variant='contained' size='large' 
          style={{ 
            marginLeft: 10, 
            marginRight: 10,
            display: 'inline-flex',
            justifyContent: 'space-between',
          }}
        >
          <RestaurantMenuIcon />
          Browse Menu
        </Button>
        <Typography variant="h4">
          Welcome to Chill Grill Restaurant {userContextUserName}
        </Typography>
        <div>
          <Button 
            variant='contained' 
            size='large' 
            style={{ marginLeft: 10, marginRight: 50 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    )
  } else {

    return(
      <AppBar 
        color='secondary'
      >
        <Toolbar style={{ width:'100%', display: 'inline-flex', justifyContent: 'space-between' }}>
          <Button variant='contained' size='large' 
            style={{ 
              marginLeft: 10, 
              marginRight: 10,
              display: 'inline-flex',
              justifyContent: 'space-between',
            }}
          >
            <RestaurantMenuIcon />
            Browse Menu
          </Button>
          <Typography variant="h4">
            Chill Grill Restaurant
          </Typography>
          <div>
            <Button 
              variant='contained' 
              size='large' 
              style={{ marginLeft: 10, marginRight: 10 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button 
              variant='contained' 
              size='large' 
              style={{ marginLeft: 10, marginRight: 50 }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

