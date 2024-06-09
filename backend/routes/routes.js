const express = require("express");
const signUpController = require("../controller/signup");
const useSignInController = require("../controller/signin");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategory = require("../controller/product/getCategory");
const getCategoryProduct = require("../controller/product/getCategoryProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/product/addToCartController");
const countAddToCartProduct = require("../controller/product/countAddToCartProduct");
const addToCartView = require("../controller/product/addToCartView");
const updateProductQty = require("../controller/product/updateProductQty");
const deleteCartProduct = require("../controller/product/deleteCartProduct");
const searchProduct = require("../controller/product/seachProduct");
const filterProductController = require("../controller/product/filterProduct");
const paymentController = require("../controller/paymentController");
const userDetailsController = require("../controller/userDetailsController");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", useSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/logout", authToken, userLogout);

// admin routes
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

// products routes
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-category", getCategory);
router.post("/get-categoryProduct", getCategoryProduct);
router.post("/product-details", getProductDetails);
router.post("/addToCart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/cart-view", authToken, addToCartView);
router.post("/update-qty", authToken, updateProductQty);
router.post("/delete-cart-product", authToken, deleteCartProduct);
router.get("/search-product", searchProduct);
router.post("/filter-product", filterProductController);

// payment
router.post("/payment", paymentController);

module.exports = router;
