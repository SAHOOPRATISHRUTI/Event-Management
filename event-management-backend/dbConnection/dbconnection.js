const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/EVENT-MANAGEMENT';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
    console.info(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
