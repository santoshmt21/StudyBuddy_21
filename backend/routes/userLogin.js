
const express = require('express');
const router = express.Router();
const UserLogin = require('../models/UserLogin');


router.get('/', async (req, res) => {
  try {
    const users = await UserLogin.find({}, { gmail: 1, password: 1, _id: 0 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  const { gmail, password } = req.body;

  try {
    
    const user = await UserLogin.findOne({ gmail, password });

    if (user) {
      res.status(200).json({
        success: true,
        message: 'Login successful',
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
