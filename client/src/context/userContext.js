import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  userName: '',
  userId: null,
  orderId: null,
  cart: {1: 0, 2 :0, 3: 0, 4: 0, 5: 0},
  setUserName: () => {},
  setUserId: () => {},
  setOrderId: () => {},
  setCart: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)
  const [userContextUserId, setUserContextUserId] = useState(defaultState.userId)
  const [userContextOrderId, setUserContextOrderId] = useState(defaultState.orderId)
  const [userContextCart, setUserContextCart] = useState(defaultState.cart)

  const setUserName = (userName) => {
    setUserContextUserName(userName)
  }

  const setUserId = (userId) => {
    setUserContextUserId(userId)
  }

  const setOrderId = (orderId) => {
    setUserContextOrderId(orderId)
  }

  const setCart = (cart) => {
    setUserContextCart(cart)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName, userContextUserId, setUserId, userContextOrderId, setOrderId, userContextCart, setCart }}>
      {props.children}
    </UserContext.Provider>
  )
}