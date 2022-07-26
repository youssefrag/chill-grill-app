import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { UserContext } from "../../context/userContext";

import {Button, Typography, AppBar, Toolbar } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tool: {
    width:'100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
  },
})

export default function Navbar(props) {

  const classes = useStyles();

  const { userContextUserName, setUserName, userContextUserId, setUserId, userContextOrderId, setOrderId, isUserLoggedIn, setUserLoggedIn, userContextCart, setCart, userContextMenuItems } = useContext(UserContext)

  const [itemsCartQuantity, setItemsCartQuantity] = useState(0)

  let itemsInCart = 0;

  useEffect(() => {
    if (isUserLoggedIn) {
      for (let i = 0; i < 5; i++) {
        const quantity = userContextCart[userContextMenuItems[i].id]
        itemsInCart += quantity
        setItemsCartQuantity(itemsInCart)
      }
    }
  }, [userContextCart])


  let navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:8080/api/auth/logout', {
      withCredentials: true,
    })
    .then(() => {
      setUserId(null)
      setUserName('')
      setOrderId(null)
      setUserLoggedIn(false)
      navigate("/login")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  if (isUserLoggedIn) {
    return(
      <AppBar 
        color='primary'
      >
        <Toolbar className={classes.tool}>
          <Button 
            color="secondary"
            variant='contained' 
            size='large'
            onClick={() => navigate("/menu")}
          >
            <RestaurantMenuIcon />
            Browse Menu
          </Button>
          <Typography variant="h3">
            Welcome {userContextUserName}
          </Typography>
          <div>
            <Button 
              color="secondary"
              variant='contained' 
              size='large' 
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart /> {itemsCartQuantity}
            </Button>
            <Button
              color="secondary"
              style={{ marginLeft: 10, marginRight: 50}}
              variant='contained' 
              size='large' 
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
        color='primary'
      >
        <Toolbar className={classes.tool}>
          <Button
            color="secondary"
            variant='disabled' 
            size='large' 
            onClick={() => navigate("/login")}
          >
            <RestaurantMenuIcon />
            Browse Menu
          </Button>
          <Typography variant="h4">
            Chill Grill Restaurant
          </Typography>
          <div>
            <Button
              color="secondary"
              variant='contained' 
              size='large' 
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="secondary"
              style={{ marginLeft: 10, marginRight: 50}}
              className={classes.lastBtn}
              variant='contained' 
              size='large' 
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

