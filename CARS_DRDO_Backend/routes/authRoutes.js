const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);  // ✅ New route
router.post('/login', loginUser);        // Existing

module.exports = router;
