import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  userName: Cookies.get('user_name'),
  setUserName: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)

  const setUserName = (userName) => {
    if (userName) {
      Cookies.set('user_name', userName)
    } else {
      Cookies.remove('user_name')
    }
    setUserContextUserName(userName)
  }

  return(
    <UserContext.Provider value={{ userContextUserName, setUserName }}>
      {props.children}
    </UserContext.Provider>
  )
}