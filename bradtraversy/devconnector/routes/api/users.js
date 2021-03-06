const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register route
// @access  Public
// router.get('/', (req, res) => res.send('User route'));
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      console.dir(`user ${user}`)
      // See if user exists
      if(user) {
        res.status(400).json({ errors: [ {msg: 'User already exists' }]});
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avatar,
        password
      });
      
      const salt = await bcrypt.genSalt(10); // Encrypt password
      user.password = await bcrypt.hash(password, salt);
      
      await user.save();

      /* // Return jsonwebtoken
      res.send('User registered'); */

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload, 
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if(err) throw token;
          res.json({ token });
        }
      );
    } catch (err) {
      // console.errors(err.message);
      console.errors(err)
      res.status(500).send('Server error');
    }

  });

module.exports = router;
