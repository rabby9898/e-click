const uploadProductPermission = require("../../helpers/permission");
const productsModel = require("../../models/productsModel");

async function UploadProductController(req, res) {
  try {
    const sessionId = req.userId;
    if (!uploadProductPermission(sessionId)) {
      throw new Error("permission denied!");
    }

    const uploadProduct = new productsModel(req.body);
    const saveProduct = await uploadProduct.save();

    res.status(201).json({
      message: "Product upload successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadProductController;
