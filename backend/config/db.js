const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected with database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
