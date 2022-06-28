const express = require('express');
const router = express.Router();
const database = require('../../database');

module.exports = (db) => {

  router.get('/menu', async (req, res) => {
    const menuItems = await database.getAllMenuItems(db);
    res.status(200).json(menuItems)
  })

  return router
}