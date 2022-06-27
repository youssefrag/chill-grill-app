const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/register', async (req,res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    console.log('name:', userData.name)
    console.log('email:', userData.email)
    console.log('password:', userData.password)

    await database.addUser(userData.name, userData.email, userData.password, db)
  
    // users[userData.email] = userData;
    let userToUse = JSON.parse(JSON.stringify(userData));
    delete userToUse.password;
    // req.session.user = userToUse.name;
    return res.status(200).json({ message : "Register successful.", user: userToUse })
  });

  return router
}

// module.exports = router;