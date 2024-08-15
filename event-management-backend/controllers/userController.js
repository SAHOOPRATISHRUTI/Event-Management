const userService= require('../services/userService')
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    console.log('Request body:', req.body);  // Log request body to verify data
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user =  await userService.getUserByEmail(email);

        if(!user){
            return res.status(400).json({ error: 'Invalid email or password' });
        }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.your_jwt_secret, { expiresIn: '1h' });

    // Return the token and user info (excluding the password)
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={
    registerUser,
    loginUser
}