import React, { useContext } from "react";
import {Button, Typography } from '@mui/material';
import axios from "axios";
import { UserContext } from '../context/userContext';

export default function Cart(props) {

  const { userContextCart, setCart, userContextMenuItems, setMenuItems } = useContext(UserContext);

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

  const cartArray = []

  let totalPrice = 0

  for (let i = 0; i < 5; i++) {
    const quantity = userContextCart[userContextMenuItems[i].id]
    cartArray.push({name: userContextMenuItems[i].name, id: userContextMenuItems[i].id, quant: quantity, price: userContextMenuItems[i].price})
    totalPrice += quantity * userContextMenuItems[i].price
  }

  const renderCart = cartArray.map((item) => {
    if (item.quant > 0) {

      return(
        <>
          <h1>
            name: {item.name}<br />
            item id: {item.id}<br />
            quantity: {item.quant}<br />
            item price: {item.price}<br />
            price: {item.quant} X {item.price} = {item.quant * item.price}
          </h1>
          <Button
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
          </Button>
        </>
      )
    }
  })

  return(
    <div>
      {renderCart}
      <h1>total price {totalPrice}</h1>
    </div>
  )


  
}