import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography, Box } from '@mui/material';
import axios from "axios";
import { UserContext } from '../context/userContext';
import { makeStyles } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: '80%',
    marginLeft: '20px',
  },
})

export default function Cart(props) {

  const classes = useStyles;

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
        <div className={classes.root}>
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
                {item.quant} {item.name}
              </Typography>
              <Button 
                sx={{
                  borderRadius: 28,
                  height: 40,
                  width: 40,
                  alignSelf: 'center',
                  marginLeft: 2
                }}
                variant= 'outlined'
                onClick={() => addToUserContextCart(item.id)}
              >
                +
              </Button>
              <Button 
                sx={{
                  borderRadius: 28,
                  height: 40,
                  width: 40,
                  alignSelf: 'center',
                  marginLeft: 2
                }}
                variant= 'outlined'
                onClick={() => decreaseFromUserContextCart(item.id)}
              >
                -
              </Button>
            </Box>
            <Box>
              <Typography variant="h2">
              {item.quant * item.price}$
              </Typography>
            </Box>
          </Box>
          {/* <h1>
            name: {item.name}<br />
            item id: {item.id}<br />
            quantity: {item.quant}<br />
            item price: {item.price}<br />
            price: {item.quant} X {item.price} = {item.quant * item.price}
          </h1> */}
          {/* <Button
            variant='contained' 
            size='large'
            onClick={() => addToUserContextCart(item.id)}
          >
            Add one
          </Button>
          <Button
            variant='contained' 
            size='large'
            onClick={() => decreaseFromUserContextCart(item.id)}
          >
            Remove one
          </Button><br />
          <Button
            variant='contained' 
            size='large'
            onClick={() => clearItemFromCart(item.id)}
          >
            Clear Item
          </Button> */}
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