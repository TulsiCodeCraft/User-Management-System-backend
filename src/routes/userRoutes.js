const express = require('express');
const { auth } = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', auth, userController.getProfile);
router.patch('/profile', auth, userController.updateProfile);
router.post('/deactivate', auth, userController.deactivateAccount);

module.exports = router;