import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../../context/userContext';
import { Typography, Box } from "@mui/material";

import MenuItem from "./MenuItem";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: '1px solid',
    marginLeft: '100px',
    marginRight: '100px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
  },
  title: {
    textAlign: 'center',
    paddingBottom: '20px'
  },
  menuItems: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

export default function MenuPage(props) {

  const classes = useStyles()

  const { userContextUserId, setOrderId, userContextMenuItems, setMenuItems } = useContext(UserContext);

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
    <div className={classes.root}>
      <Typography
        vartiant='h1'
        fontSize={50}
        className={classes.title}
      >
        Browse our delicious menu!
      </Typography>
      <Box className={classes.menuItems}>
        {menuItemsList}
      </Box>
    </div>
  )
}