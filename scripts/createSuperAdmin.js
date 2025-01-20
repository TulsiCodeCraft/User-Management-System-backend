
require('dotenv').config();
const mongoose = require('mongoose');
const { createSuperAdmin } = require('../src/controllers/adminController');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  createSuperAdmin('superadmin@example.com', 'superadmin123');
})
.catch((err) => console.error('MongoDB connection error:', err));