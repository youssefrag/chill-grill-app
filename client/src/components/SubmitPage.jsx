import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography } from '@mui/material';
import axios from "axios";
import { UserContext } from '../context/userContext';

export default function SubmitPage() {

  const { userContextCart, setCart, userContextOrderId, setOrderId } = useContext(UserContext);

  useEffect(() => {
    setCart({1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    setOrderId(null)
  }, [])

  let navigate = useNavigate();

  return (
    <h1>
      Your order has been submitted!
    </h1>
  )
}
