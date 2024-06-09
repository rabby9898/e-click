const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  try {
    const token = await req.cookies?.token;

    if (!token) {
      return res.status(400).json({
        message: "User is not logged in!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, function (err, decoded) {
      console.log("jwt-errror------", err);
      console.log("Decoded user", decoded);

      if (err) {
        console.log("Error Auth", err);
      }
      req.userId = decoded?._id;
      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;
