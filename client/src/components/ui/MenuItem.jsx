import React, { useContext } from "react";
import {Button, Typography } from '@mui/material';
import { UserContext } from '../../context/userContext';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
  },
  menuImage: {
    height: '200px',
    width: '250px',
  },
});

export default function MenuItem(props) {

  const classes = useStyles();

  const { name, image, price } = props
  const itemId = props.id

  const { userContextOrderId, userContextCart, setCart } = useContext(UserContext);

  const addToUserContextCart = () => {

    const newAmountAfterAdding = userContextCart[itemId] + 1
    setCart(prev => ({
      ...userContextCart, [itemId]: newAmountAfterAdding
    }))
  }

  return(
    <div className={classes.root}>
      <Typography
        variant="h2"
      >
        {name}
      </Typography>
      <img src={image} className={classes.menuImage}/>
      <Typography
        variant="h2"
      >
        {price}$
      </Typography>
      <Button
        variant='contained' 
        size='large'
        // onClick={addToCart}
        onClick={addToUserContextCart}
      >
        Add to cart!
      </Button>
    </div>
  )
}