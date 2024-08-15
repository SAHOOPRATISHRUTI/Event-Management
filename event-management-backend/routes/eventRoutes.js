const express = require('express');
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleWare');

const router = express.Router();

// Create event
router.post('/', authMiddleware, eventController.createEvent);

// Update event
router.put('/:id', authMiddleware, eventController.updateEvent);

// Delete event
router.delete('/:id', authMiddleware, eventController.deleteEvent);

module.exports = router;
