const userService= require('../services/userService')
const jwt = require('jsonwebtoken');
const User = require('../model/user')
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  try {
    console.log('Request body:', req.body);  // Log request body to verify data
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('email',email);
    

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token (example, ensure you have jwt package installed)
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.your_jwt_secret,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports={
    registerUser,
    loginUser
}