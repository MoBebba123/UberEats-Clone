const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");


exports.createProduct = catchAsyncError(async (req, res, next) => {
    
})