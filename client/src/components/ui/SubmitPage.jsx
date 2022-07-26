import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography } from '@mui/material';
import { UserContext } from '../../context/userContext';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: '1px solid',
    marginLeft: '100px',
    marginRight: '100px',
    backgroundColor: 'white',
    borderRadius: '20px',
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
    <div className={classes.root}>
      <Typography
        variant="h1"
        fontSize={40}
        align="center"
        sx={{
          marginTop: '20px'
        }}
      >
        Your order has been placed. It will ve ready for pickup in 15 minutes!
      </Typography>
      <Typography
        align="center"
      >
        <Button
          sx={{
            marginBottom: '20px',
            marginTop: '20px'
          }}
          className={classes.goToMenuBtn}
          variant='contained' 
          size='large'
          color='secondary'
          onClick={() => navigate('/menu')}
        >
          Back to menu
        </Button>
      </Typography>
    </div>
  )
}
