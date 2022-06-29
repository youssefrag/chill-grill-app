const express = require('express');
const router = express.Router();
const database = require('../../database');

module.exports = (db) => {

  router.get('/menu', async (req, res) => {
    const menuItems = await database.getAllMenuItems(db);
    res.status(200).json(menuItems)
  })

  router.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    console.log('user id:', userId)
    const orderId = await database.findOrder(userId, pool)
    res.status(200).json(orderId)
  })

  router.post('/newOrder/:userId', async (req, res) => {
    const userId = req.params.userId
    const orderId = await database.createOrder(userId, pool)
    res.status(200).json(orderId)
  })

  return router
}