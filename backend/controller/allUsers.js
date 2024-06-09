const userModel = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    console.log("users", req.userId);
    const users = await userModel.find();
    res.json({
      message: "All Users",
      data: users,
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = allUsers;
