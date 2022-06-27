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
  const [userContextuserName, setUserContextuserName] = useState(defaultState.userName)

  const setUserName = (userName) => {
    if (userName) {
      Cookies.set('user_name', userName)
    } else {
      Cookies.remove('user_name')
    }
    setUserContextuserName(userName)
  }

  return(
    <UserContext.Provider value={{ userContextuserName, setUserName, isUserLoggenIn: props.isUSerLoggenIn, setUserLoggenIn: props.setUserLoggenIn }}>
      {props.children}
    </UserContext.Provider>
  )
}