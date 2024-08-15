const express = require("express");
const userRouter = require('../routes/userRoutes');
const eventRouter = require('../routes/eventRoutes');
const mainRouter = express.Router();

// Prefix routes for events and users correctly
mainRouter.use("/events", eventRouter); // Use /events for event routes
mainRouter.use("/users", userRouter);   // Use /users for user routes

module.exports = mainRouter;  // Ensure mainRouter is exported correctly
