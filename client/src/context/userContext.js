import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  setUserName: () => {},
  setUserId: () => {}
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)

  const setUserName = (userName) => {
    setUserContextUserName(userName)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName }}>
      {props.children}
    </UserContext.Provider>
  )
}