import React, { useState, useEffect, useContext } from "react";
import {Button, Typography } from '@mui/material';
import "./MenuItem.css"
import axios from "axios";
import { UserContext } from '../context/userContext';

export default function MenuItem(props) {

  const { name, image, price } = props
  const itemId = props.id

  const { userContextOrderId, userContextCart, setCart } = useContext(UserContext);

  // const addToCart = () => {
  //   axios.post(`http://localhost:8080/api/order/add_item/${userContextOrderId}/${itemId}`)
  // }

  const addToUserContextCart = () => {

    
    if (userContextCart[itemId]) {
      setCart(prev => ({...userContextCart, [itemId]: userContextCart[itemId]++ }))
    } else {
      setCart(prev => ({...userContextCart, [itemId]: 1}))
    }
    
    console.log(userContextCart)
    console.log(userContextCart[itemId])
  }

  return(
    <>
      <h1>{name}</h1>
      <img src={image} className="menu-image"/>
      <h2>{price}$</h2>
      <h2>item id: {itemId}</h2>
      <Button
        variant='contained' 
        size='large'
        // onClick={addToCart}
        onClick={addToUserContextCart}
      >
        Add to cart!
      </Button>
    </>
  )
}