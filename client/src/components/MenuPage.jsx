import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';
import MenuItem from "./MenuItem";

export default function MenuPage(props) {


  const { setUserName, userContextUserId, userContextOrderId, setOrderId, userContextMenuItems, setMenuItems } = useContext(UserContext);

  const createNewOrder = (userId) => {
    axios.post(`http://localhost:8080/api/order/new_order/${userId}`, {
      withCredentials: true
    })
    .then((result) => {
      setOrderId(result.data.id)
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/api/order/ongoing/${userContextUserId}`, {
      withCredentials: true
    })
    .then((result) => {
      const order = result.data.rows[0]
      // console.log('order:', order)
      if (order) {
        setOrderId(order.id)
      } else {
        createNewOrder(userContextUserId)
      }
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

  const menuItemsList = userContextMenuItems.map((item) => {
    return(
      <div>
        <MenuItem
          id={item.id}
          name={item.name}
          image={item.photo_url}
          price={item.price}
        />
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