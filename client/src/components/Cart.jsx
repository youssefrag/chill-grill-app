import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { UserContext } from '../context/userContext';
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    marginLeft: '20px',
    marginRight: '20px',
    background: 'grey',
  },
  addRemoveBtn: {
    borderRadius: 28,
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginLeft: 20,
  },
});

export default function Cart(props) {

  const classes = useStyles();

  console.log('classes:', classes)

  const { userContextCart, setCart, userContextMenuItems, setMenuItems, userContextOrderId } = useContext(UserContext);

  let navigate = useNavigate();

  const addToUserContextCart = (itemId) => {

    const newAmountAfterAdding = userContextCart[itemId] + 1
    setCart(prev => ({
      ...userContextCart, [itemId]: newAmountAfterAdding
    }))
  }

  const decreaseFromUserContextCart = (itemId) => {
    const newAmountAfterDecreasing = userContextCart[itemId] - 1
    setCart(prev => ({
      ...userContextCart, [itemId]: newAmountAfterDecreasing
    }))
  }

  const clearItemFromCart = (itemId) => {
    const newAmount = 0
    setCart(prev => ({
      ...userContextCart, [itemId]: newAmount
    }))
  }

  const submitOrder = (orderId) => {
    axios.post(`http://localhost:8080/api/order/submit/${orderId}`, userContextCart, {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const cartArray = []

  let totalPrice = 0

  let itemsCartQuantity = 0

  for (let i = 0; i < 5; i++) {
    const quantity = userContextCart[userContextMenuItems[i].id]
    itemsCartQuantity += quantity
    cartArray.push({name: userContextMenuItems[i].name, id: userContextMenuItems[i].id, quant: quantity, price: userContextMenuItems[i].price})
    totalPrice += quantity * userContextMenuItems[i].price
  }

  const renderCart = cartArray.map((item) => {
    if (item.quant > 0) {

      return(
        <div>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between' 
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between' 
              }}
            >
              <Typography variant= "h2">
                {item.quant} X {item.name}
              </Typography>
              <Button 
                className={classes.addRemoveBtn}
                variant= 'outlined'
                onClick={() => addToUserContextCart(item.id)}
              >
                +
              </Button>
              <Button 
                className={classes.addRemoveBtn}
                variant= 'outlined'
                onClick={() => decreaseFromUserContextCart(item.id)}
              >
                -
              </Button>
            </Box>
            <Box
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between' 
              }}
            >
              <Typography variant="h2">
                {item.quant * item.price}$
              </Typography>
              <Button
                onClick={() => clearItemFromCart(item.id)}
              >
                <DeleteIcon fontSize="large"/>
              </Button>
            </Box>
          </Box>
        </div>
      )
    }
  })


  if (totalPrice === 0) {
    return(
      <>
        <h1>
          cart is empty!
        </h1>
        <Button
          variant='contained' 
          size='large'
          onClick={() => navigate('/menu')}
        >
          Go to menu
        </Button>
      </>
    )
  } else {
    return(
      <div>
        {renderCart}
        <h1>total price {totalPrice}</h1>
        <Button
          variant='contained' 
          size='large'
          onClick={submitOrder(userContextOrderId)}
          onClick={() => navigate('/submit')}
        >
          Submit Order
        </Button>
      </div>
    )
  }

  
}