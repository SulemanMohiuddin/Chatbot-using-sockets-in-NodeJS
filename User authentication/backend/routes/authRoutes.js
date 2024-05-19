const express = require('express');
const router = express.Router();
const User = require('../models/User');

const { registerUser, loginUser, logoutUser, understandings} = require('../controllers/authController');

router.get('/', understandings);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

module.exports = router;