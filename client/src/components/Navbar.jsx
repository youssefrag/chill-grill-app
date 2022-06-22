import {Button, Typography, AppBar, Toolbar, Stack } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   navbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   }
// })

export default function Navbar(props) {
  // const classes = useStyles()

  return(
    <AppBar color='secondary'>
      <Toolbar style={{ width:'100%', display: 'inline-flex', justifyContent: 'space-between' }}>
        <Button variant='contained' size='large'>
          <RestaurantMenuIcon />
          Browse Menu
        </Button>
        <Typography variant="h4">
          Chill Grill Restaurant
        </Typography>
        <div>
          <Button variant='contained' size='large'>
            Login
          </Button>
          <Button variant='contained' size='large'>
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

