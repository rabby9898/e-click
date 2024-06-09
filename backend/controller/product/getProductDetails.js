const productsModel = require("../../models/productsModel");

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productsModel.findById(productId);

    res.json({
      data: product,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductDetails;
