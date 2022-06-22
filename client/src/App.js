import './App.css';
import {Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <AppBar color='secondary'>
          <Toolbar>
            <Button variant='contained' size='large'>
              <RestaurantMenuIcon />
              Browse Menu
            </Button>
            {/* <IconButton>
              <RestaurantMenuIcon />
            </IconButton> */}
            <Typography variant="h4">
              Chill Grill Restaurant
            </Typography>
            <div id="user">
              <Button variant='contained' size='large'>
                Login
              </Button>
              <Button variant='contained' size='large'>
                Sign Up
              </Button>
            </div>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default App;
