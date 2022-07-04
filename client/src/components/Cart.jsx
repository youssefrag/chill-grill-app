import React, { useContext } from "react";
import {Button, Typography } from '@mui/material';
import axios from "axios";
import { UserContext } from '../context/userContext';

export default function Cart(props) {

  const { userContextCart, setCart } = useContext(UserContext);

  // console.log(userContextCart)
 
  for (let item in userContextCart) {
    console.log(userContextCart[item])
  }

  return(
    <>
      <h1>
        Cart!
      </h1>
    </>
  )
}