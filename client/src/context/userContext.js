import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

const defaultState = {
  email: Cookies.get('user_email'),
  setUserEmail: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextEmail, setuserContextEmail] = useState(defaultState.email);

  const setUserEmail = (email) => {
    if (email) {
      Cookies.set('user_email', email);
    } else {
      Cookies.remove('user_email');
    }
    setuserContextEmail(email)
  }

  return(
    <UserContext.Provider value={{ userContextEmail, setUserEmail, isUserLoggedIn: props.isUserLoggedIn, setUserLoggedIn: props.setUserLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  )

}