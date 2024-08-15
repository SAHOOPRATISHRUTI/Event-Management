const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const authMiddleware = async (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.your_jwt_secret);
    
    // Find the user associated with the token
    const user = await userService.getUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'User not found, authorization denied' });
    }

    // Attach the user to the request object
    req.user = user;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
