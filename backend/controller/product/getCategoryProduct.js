const productsModel = require("../../models/productsModel");

const getCategoryProduct = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const product = await productsModel.find({ category });

    res.json({
      data: product,
      message: "Product",
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

module.exports = getCategoryProduct;
