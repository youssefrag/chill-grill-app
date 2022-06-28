import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";

import MenuItem from "./MenuItem";

export default function MenuPage(props) {

  let menuItems = []

  axios.get('http://localhost:8080/api/order/menu', {
    withCredentials: true,
  })
  .then((result) => {
    // console.log(result.data)
    menuItems = result.data
  })



  const menuItemsList = menuItems.map((item) => {
    
    return(
      <div>
        {/* <MenuItem
          name={item.name}
          image={item.photo_url}
          price={item.price}
        /> */}
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