const Event = require('../model/event') 

const createEvent= async (eventData)=>{
    const event=new event(eventData);
    await event.save();
    return event;
};

const getEventById = async (id) => {
    return await Event.findById(id).populate('createdBy', 'name email');
  };
  
  const updateEvent = async (id, eventData) => {
    return await Event.findByIdAndUpdate(id, eventData, { new: true });
  };
  
  const deleteEvent = async (id) => {
    return await Event.findByIdAndDelete(id);
  };














module.exports={
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent

}