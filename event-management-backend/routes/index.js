const express = require('express');
const userRouter = require('./userRoutes'); // Adjust the path if needed
const eventRouter = require('./eventRoutes'); // Adjust the path if needed

const mainRouter = express.Router(); // Create a router instance

// Prefix routes for events and users correctly
mainRouter.use("/events", eventRouter); // Use /events for event routes
mainRouter.use("/users", userRouter);   // Use /users for user routes

module.exports = mainRouter;  // Ensure mainRouter is exported correctly as a middleware function
