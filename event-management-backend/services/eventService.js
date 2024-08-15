const Event = require('../model/event');

const createEvent = async (eventData) => {
    const event = new Event(eventData);  // Note the correction to `Event` instead of `event`
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

// Define the missing `getEvents` function
const getEvents = async () => {
    return await Event.find().populate('createdBy', 'name email');
};

module.exports = {
    createEvent,
    getEvents,  // This was causing the error because it was not defined earlier
    getEventById,
    updateEvent,
    deleteEvent,
};
