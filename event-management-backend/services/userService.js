const User=require('../model/user')
const bcrypt=require('bcryptjs')

const createUser=async (userData)=>{
    const {name,email,password} =userData;

    //if exiting user 
    const exitingUser=await User.findOne({email});
    if(exitingUser){
        throw new Error('Email already exists')
    }
    //Hash the password
    const hashedPassword= await bcrypt.hash(password,10)

    //create new User
    const user =  User({
        name,
        email,
        password:hashedPassword,
    });

    //save user to database
    await user.save();
    return user;

}
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
