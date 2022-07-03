import React from "react";
import {Button, Typography } from '@mui/material';
import "./MenuItem.css"

export default function MenuItem(props) {

  const { name, image, price } = props
  const itemId = props.id

  return(
    <>
      <h1>{name}</h1>
      <img src={image} className="menu-image"/>
      <h2>{price}$</h2>
      <h2>item id: {itemId}</h2>
      <Button
        variant='contained' 
        size='large'
      >
        Add to cart!
      </Button>
    </>
  )
}