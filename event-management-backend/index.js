require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./dbConnection/dbconnection');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const allowOrigin = ["*", "http://localhost:3000", "http://192.168.1.8:3000"];
const corsOpts = {
  origin: allowOrigin,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOpts));

// Connect to the database
connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
