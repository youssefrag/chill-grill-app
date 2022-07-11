import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography } from '@mui/material';
import { UserContext } from '../../context/userContext';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  goToMenuBtn: {
    marginTop: 40,
  },
});

export default function SubmitPage() {

  const classes = useStyles();

  const { setCart, setOrderId } = useContext(UserContext);

  useEffect(() => {
    setCart({1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    setOrderId(null)
  }, [])

  let navigate = useNavigate();

  return (
    <div>
      <Typography
        variant="h1"
        fontSize={40}
        align="center"
      >
        Your order has been placed. It will ve ready for pickup in 15 minutes!
      </Typography>
      <Typography
        align="center"
      >
        <Button
          className={classes.goToMenuBtn}
          variant='contained' 
          size='large'
          onClick={() => navigate('/menu')}
        >
          Back to menu
        </Button>
      </Typography>
    </div>
  )
}
