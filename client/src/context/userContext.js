import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  userName: '',
  userId: null,
  orderId: null,
  setUserName: () => {},
  setUserId: () => {},
  setOrderId: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)
  const [userContextUserId, setUserContextUserId] = useState(defaultState.userId)
  const [userContextOrderId, setUserContextOrderId] = useState(defaultState.orderId)

  const setUserName = (userName) => {
    setUserContextUserName(userName)
  }

  const setUserId = (userId) => {
    setUserContextUserId(userId)
  }

  const setOrderId = (orderId) => {
    setUserContextOrderId(orderId)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName, userContextUserId, setUserId, userContextOrderId, setOrderId }}>
      {props.children}
    </UserContext.Provider>
  )
}