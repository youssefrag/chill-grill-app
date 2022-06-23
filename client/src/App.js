import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import Cookies from 'js-cookie';

import Navbar from './components/Navbar';
import LoginPage from "./components/LoginPage";

import './App.css';

function App() {
  const isLoggedIn = Cookies.get('user_email')
  const [isUserLoggedIn, setUserLoggedIn] = useState(isLoggedIn);

  return (
    <div className="App">
      <UserContextProvider>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
        <Route path="/login" element={ (isUserLoggedIn) ? <Navigate replace to="/" /> : <LoginPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
