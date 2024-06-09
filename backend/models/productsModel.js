const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
  },
  {
    timestamps: true,
  }
);
const productsModel = mongoose.model("product", productsSchema);
module.exports = productsModel;
