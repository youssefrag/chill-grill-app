import React, { useContext } from "react";
import {Button, Typography } from '@mui/material';
import axios from "axios";
import { UserContext } from '../context/userContext';

export default function Cart(props) {

  const { userContextCart, setCart, userContextMenuItems, setMenuItems } = useContext(UserContext);

  const cartArray = []

  for (let i = 0; i < 5; i++) {
    const quantity = userContextCart[userContextMenuItems[i].id]
    cartArray.push({name: userContextMenuItems[i].name, id: userContextMenuItems[i].id, quant: quantity})
  }

  const renderCart = cartArray.map((item) => {
    return(
      <h1>
        name: {item.name}<br />
        item id: {item.id}<br />
        quantity: {item.quant}
      </h1>
    )
  })

  return(
    <div>
      {renderCart}
    </div>
  )


  
}