import {Button, Typography, AppBar, Toolbar, Stack } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import "./Navbar.css"

export default function Navbar(props) {
  // const classes = useStyles()

  return(
    <AppBar color='secondary'>
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
          <Button variant='contained' size='large' style={{ marginLeft: 10, marginRight: 10 }}>
            Login
          </Button>
          <Button variant='contained' size='large' style={{ marginLeft: 10, marginRight: 50 }}>
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

