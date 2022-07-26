import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContextProvider } from "../context/userContext";
import Cookies from 'js-cookie';

import Navbar from './ui/Navbar';
import LoginPage from "./ui/LoginPage";
import RegistrationPage from "./ui/RegistrationPage";
import MenuPage from "./ui/MenuPage";
import Cart from "./ui/Cart"
import SubmitPage from "./ui/SubmitPage";

import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";

const useStyles = makeStyles({
  root: {
    paddingTop: '100px',
    paddingBottom: '500px',
    backgroundColor: '#D3D3D3',
  },
});

function App() {

  const classes = useStyles();

  const isLoggedIn = Cookies.get('user_id') && Cookies.get('chillgrillsession')
  const [isUserLoggedIn, setUserLoggedIn] = useState(isLoggedIn);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
          <header className="App-header">
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={ (isUserLoggedIn) ? <MenuPage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/menu" element={ (isUserLoggedIn) ? <MenuPage /> : <LoginPage />} />
            <Route path="/cart" element={ (isUserLoggedIn) ? <Cart /> : <LoginPage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </UserContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
