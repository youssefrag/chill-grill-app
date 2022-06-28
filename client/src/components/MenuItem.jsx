import React from "react";

export default function MenuItem(props) {

  const { name, image, price } = props

  return(
    <>
      <h1>{name}</h1>
      <img src='./menu-pictures/cheeseburger.jpeg' />
      <h1>{image}</h1>
      <h2>{price}$</h2>
    </>
  )
}