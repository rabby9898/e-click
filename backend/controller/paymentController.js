const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox

const paymentController = async (req, res) => {
  try {
    const currentUser = req.userId;
    const paymentData = req.body;
    console.log(paymentData);
    res.json({
      message: "Payment SuccessFul",
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

module.exports = paymentController;
