const utils = require('./utils/helpers')

const addUser = function (name, email, password, pool) {
  return pool
    .query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, [name, email, password]
    )
    .then((result) => {
      // console.log(result.rows)
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const getUser = function (email, pool) {
  return pool
    .query(
      `
        SELECT * FROM users
        WHERE users.email = $1;
      `, [email]
    )
    .then((result) => {
      // console.log(result.rows)
      // console.log('result:', result.rows[0].password)
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const getAllMenuItems = function (pool) {
  return pool
    .query(
      `SELECT * FROM menu;`
    )
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const findOrder = function (userId, pool) {
  return pool
    .query(
      `
        SELECT orders.id FROM orders WHERE user_id=$1 AND order_placed=false; 
      `,
      [userId]
    )
}

const createOrder = function (userId, pool) {
  return pool
    .query(
      `
        INSERT INTO orders (user_id, order_placed, order_ready) VALUES ($1, false, false)
        RETURNING orders.id;
      `,
      [userId]
    )
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const addOrderItems = function(cart, orderId, pool) {
  const cartQuery = utils.createOrderQuery(cart, orderId).toString()
  return pool
    .query(
      `${cartQuery}`
    )
}

const placeOrder = function(orderId, pool) {
  return pool
    .query(
      `UPDATE orders SET order_placed = true WHERE orders.id = $1;`,
      [orderId]
    )
}

module.exports = { addUser, getUser, getAllMenuItems, findOrder, createOrder, addOrderItems, placeOrder }