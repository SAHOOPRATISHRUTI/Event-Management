const bcrypt = require('bcryptjs');
const User = require('../model/user');

const createUser = async (userData) => {
  const { name, email, password } = userData;

  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  console.log(`Password type: ${typeof password}`);

  if (typeof password !== 'string') {
    throw new Error('Password must be a string');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  return user;
};



const getUserByEmail = async(email)=>{
    return await User.findOne({email});
}

const getUserById = async(id)=>{
    return await User.findById(id);
}

module.exports={
    createUser,
    getUserByEmail,
    getUserById,
}
