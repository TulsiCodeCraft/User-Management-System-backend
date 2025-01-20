const Admin = require('../models/Admin');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).send({ error: 'Invalid login credentials' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send({ error: 'Invalid login credentials' });
    }
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
    res.send({ admin, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.createSuperAdmin = async (email, password) => {
  try {
    const admin = new Admin({ email, password });
    await admin.save();
    console.log('Super Admin created successfully');
  } catch (error) {
    console.error('Error creating Super Admin:', error);
  }
};