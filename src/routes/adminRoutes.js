const express = require('express');
const { adminAuth } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/login', adminController.login);
router.get('/users', adminAuth, adminController.getAllUsers);

module.exports = router;