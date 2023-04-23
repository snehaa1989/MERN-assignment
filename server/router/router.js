const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../Database/connection');
const User = require('../model/userSchema');

// configuring MiddleWare
const middleware = (req, res, next) => {
  next();
};

// creating routes
router.get('/', (req, res) => {
  res.send('Hello this is HOME routing');
});

router.get('/about', middleware, (req, res, next) => {
  res.send('Hello this is ABOUT routing');
});

router.get('/login', (req, res) => {
  res.send('Hello this is LOGIN routing');
});

router.post('/signup', async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;
  const user = new User({ name, email, phone, password, confirmPassword });

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      console.log('ERROR : USER ALREADY EXISTS');
      return res.status(500).send('ERROR : USER ALREADY EXISTS');
    }
    let saved = await user.save();
    if (saved) {
      console.log('USER ADDED SUCCESSFULLY');
      res.status(201).send('USER ADDED SUCCESSFULLY');
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const registeredUser = await User.findOne({ email: email });

    console.log(email, password);
    console.log(registeredUser);

    // checking users existence
    if (!registeredUser) {
      res.status(404).json({ message: 'User not Found', state: false });
    }

    // comparing passwords
    console.log(password);
    console.log(registeredUser.password);

    const isMatch = await bcrypt.compare(password, registeredUser.password);
    console.log(isMatch);

    if (!isMatch) {
      return res
        .status(500)
        .json({ message: 'Invalid Credentials', state: false });
    }
    return res.status(200).json({
      message: 'Login Successful',
      name: registeredUser.name,
      state: true,
    });
  }
    catch (err) {
        console.log(err);
        }
        
    
});

module.exports = router;