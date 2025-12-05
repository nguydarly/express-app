const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Root route
router.get('/', (req, res) => {
  res.send('Hello from Express routes!');
});

// User routes
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);

module.exports = router;