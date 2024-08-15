require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./dbConnection/dbconnection');
const mainRouter=require('./routes/index')
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
app.use(cors({
  origin: ["*", "http://localhost:3000", "http://192.168.1.8:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));



// Connect to the database
connectDB();


app.get("/", (req, res) => {
  res.send("Welcome to Demo API!");
});
app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
