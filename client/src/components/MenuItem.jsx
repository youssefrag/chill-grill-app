import React from "react";

export default function MenuItem(props) {

  const { name, image, price } = props

  return(
    <>
      <h1>{name}</h1>
      <img src={image} />
      <h2>{price}$</h2>
    </>
  )
}