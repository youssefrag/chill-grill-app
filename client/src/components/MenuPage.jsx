import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';
import MenuItem from "./MenuItem";

export default function MenuPage(props) {

  const [menuItems, setMenuItems] = useState([])

  const { setUserName, userContextUserId, userContextOrderId, setOrderId } = useContext(UserContext);

  useEffect(() => {
    axios.get(`https://localhost:8080/api/order/:${userContextUserId}`, {
      withCredentials: true
    })
    .then((result) => {
      console.log('orderId:', result.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8080/api/order/menu', {
      withCredentials: true,
    })
    .then((result) => {
      setMenuItems(result.data)
    })
  }, [])

  const menuItemsList = menuItems.map((item) => {
    return(
      <div>
        <MenuItem
          name={item.name}
          image={item.photo_url}
          price={item.price}
        />
        <Button
          variant='contained' 
          size='large' 
        >
          Add to cart!
        </Button>
      </div>
    )
  })
  
  return(
    <>
      <h1>Menu Page!</h1>
      <ul>
        {menuItemsList}
      </ul>
    </>
  )
}