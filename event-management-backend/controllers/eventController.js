const eventService = require('../services/eventService')

const createEvent = async(req,res)=>{
    try{
    const Event = await eventService.createEvent.({...req.body,createdBy:req.user.id})
    res.status(201).json(event);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}
const 












module.exports={
    createEvent
}