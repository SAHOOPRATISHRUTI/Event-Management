const eventService = require('../services/eventService')

const createEvent = async (req, res) => {
    try {
      const event = await eventService.createEvent({ ...req.body, createdBy: req.user.id });
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getEvents = async (req, res) => {
    try {
      const events = await eventService.getEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getEventById = async (req, res) => {
    try {
      const event = await eventService.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateEvent = async (req, res) => {
    try {
      const event = await eventService.updateEvent(req.params.id, req.body);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteEvent = async (req, res) => {
    try {
      const event = await eventService.deleteEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
  };