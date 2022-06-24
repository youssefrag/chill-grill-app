const express = require('express');
const router = express.Router();

router.post('/register', (req,res) => {
  const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  }
  console.log('name:', userData.name)
  console.log('email:', userData.email)
  console.log('password:', userData.password)
  // users[userData.email] = userData;
  // let userToUse = JSON.parse(JSON.stringify(userData));
  // delete userToUse.password;
  //req.session.user = userToUse;
  // return res.status(200).json({ message : "Register successful.", user: userToUse })
});

module.exports = router;