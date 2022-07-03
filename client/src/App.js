import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import Cookies from 'js-cookie';

import Navbar from './components/Navbar';
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import MenuPage from "./components/MenuPage";
import Cart from "./components/Cart"

import './App.css';

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
