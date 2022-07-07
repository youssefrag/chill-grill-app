import React, { createContext, useState } from "react";

const defaultState = {
  userName: '',
  userId: null,
  orderId: null,
  cart: {1: 0, 2 :0, 3: 0, 4: 0, 5: 0},
  menuItems: [],
  setUserName: () => {},
  setUserId: () => {},
  setOrderId: () => {},
  setCart: () => {},
  setMenuItems: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)
  const [userContextUserId, setUserContextUserId] = useState(defaultState.userId)
  const [userContextOrderId, setUserContextOrderId] = useState(defaultState.orderId)
  const [userContextCart, setUserContextCart] = useState(defaultState.cart)
  const [userContextMenuItems, setUserContextMenuItems] = useState(defaultState.menuItems)

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

  const setMenuItems = (menuItems) => {
    setUserContextMenuItems(menuItems)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName, userContextUserId, setUserId, userContextOrderId, setOrderId, userContextCart, setCart, isUserLoggedIn: props.isUserLoggedIn, setUserLoggedIn: props.setUserLoggedIn, userContextMenuItems, setMenuItems }}>
      {props.children}
    </UserContext.Provider>
  )
}