const express = require('express');
const router = express.Router();
const database = require('../../database');

module.exports = (db) => {

  router.get('/menu', async (req, res) => {
    const menuItems = await database.getAllMenuItems(db);
    res.status(200).json(menuItems)
  })

  router.get('/ongoing/:user_id', async (req, res) => {
    const userId = req.params.user_id
    // console.log('user id:', userId)
    const orderId = await database.findOrder(userId, db)
    // console.log('order id:', orderId.rows[0])
    res.status(200).json(orderId)
  })

  router.post('/new_order/:user_id', async (req, res) => {
    // console.log('new order route hit!')
    const userId = req.params.user_id
    const orderId = await database.createOrder(userId, db)
    // console.log('order_id:', orderId.id)
    res.status(200).json(orderId)
  })

  router.post('/add_item/:order_id/:item_id', async (req, res) => {
    const orderId = req.params.order_id
    const itemId = req.params.item_id
    await database.addToCart(orderId, itemId, db)
    res.status(200)
  })

  router.post('/submit/:order_id', async (req,res) => {
    // console.log('submit route was hit!')
    const cart = req.body
    const orderId = req.params.order_id
    await database.addOrderItems(cart, orderId, db)
    await database.placeOrder(orderId, db)
    setTimeout(function() {
      database.orderReady(orderId, db)
    }, 15 * 60 * 1000)
    res.status(200)
  })

  return router
}