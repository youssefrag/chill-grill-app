import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { UserContext } from "../context/userContext";

import {Button, Typography, AppBar, Toolbar, Stack } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Navbar(props) {

  const { userContextUserName, setUserName, isUserLoggedIn, setUserLoggenIn} = useContext(UserContext)

  let navigate = useNavigate();

  if (isUserLoggedIn) {
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
            style={{ marginLeft: 10, marginRight: 50 }}
            // onClick={() => navigate("/register")}
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

