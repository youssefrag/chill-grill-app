import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  userName: '',
  userId: null,
  setUserName: () => {},
  setUserId: () => {}
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)
  const [userContextUserId, setUserContextUserId] = useState(defaultState.userId)

  const setUserName = (userName) => {
    setUserContextUserName(userName)
  }

  const setUserId = (userId) => {
    setUserContextUserId(userId)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName, userContextUserId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  )
}