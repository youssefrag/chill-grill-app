import React, { useContext } from "react";
import {Button, Typography } from '@mui/material';
import "./MenuItem.css"
import axios from "axios";
import { UserContext } from '../context/userContext';
// import { useContext } from 'react';

export default function MenuItem(props) {

  const { name, image, price } = props
  const itemId = props.id

  const { userContextOrderId } = useContext(UserContext);

  const addToCart = () => {
    axios.post(`http://localhost:8080/api/order/add_item/${userContextOrderId}/${itemId}`)
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
        onClick={addToCart}
      >
        Add to cart!
      </Button>
    </>
  )
}