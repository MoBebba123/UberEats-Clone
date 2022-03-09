const express = require("express");
const { createProduct } = require("../controllers/productController");
const { isAuthenticatedUser, isSellerOrAdmin } = require("../middleware/auth");

const router = express.Router();


router.route("/product/create").get(isAuthenticatedUser, isSellerOrAdmin, createProduct);




module.exports = router;