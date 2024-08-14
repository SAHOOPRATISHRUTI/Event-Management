const userService= require('../services/userService')


const registerUser= async(req,res)=>{
    try{
        const user =  await userService.createUser(req.body);
        res.status(201).json(user);

    }catch(error){
        res.status(400).json({error:error.message});
    }
}
const loginUser= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user =  await userService.getUserByEmail(email);

        if(!user){
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await user.isMatch(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
          }


        } catch (error) {
            res.status(500).json({ error: error.message });
          }
}

module.exports={
    registerUser,
    loginUser
}