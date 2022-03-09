const catchAsyncError = require("../middleware/catchAsyncError");
const Seller = require("../models/sellerModel");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const sendEmail = require("../utils/SendMail");

// Send Seller Request
exports.sellerRequest = catchAsyncError(async (req, res, next) => {
  const {
    name,
    logo,
    email,
    category,
    phoneNumber,
    country,
    pinCode,
    city,
    address,
    latitude,
    longitude,
  } = req.body
  const user = await User.findById(req.user._id);
  const createdBy = user._id;


  if (!name || !address) {
    return next(new ErrorHandler("Please Enter Name & Address ", 400));
  }
  if (!phoneNumber) {
    return next(new ErrorHandler("Please Enter Your Phone Number ", 400));
  }
  if (!logo) {
    return next(new ErrorHandler("Please Select a Logo ", 400));
  }
  const existingMerchant = await Seller.findOne({ email });
  if (existingMerchant) {
    return next(new ErrorHandler("That email address is already in use.", 400));
  }
  const seller = new Seller({
    name,
    logo,
    email,
    address,
    phoneNumber,
    category,
    country,
    pinCode,
    city,
    latitude,
    longitude,
    createdBy,
  });

  const createdSeller = await seller.save();
  user.seller = seller._id

  await user.save({ validateBeforeSave: false });

  const message = "We received your request! Our team will contact you soon.";
  const adminMessage = `you recevied a seller request from ${user.firstName}, ${email}`;
  await sendEmail({
    email: email,
    subject: `thank you for your request`,
    message,
  });
  await sendEmail({
    email: "mohamedbebba1@gmail.com",
    subject: `new Seller request`,
    message: adminMessage,
  });

  res.status(200).json({
    success: true,
    message: `We received your request! we will reach you on your phone number ${phoneNumber} or on your ${email}!`,
    seller: createdSeller,

  });
})

// Seller Approval
exports.approveSeller = catchAsyncError(async (req, res, next) => {
  const sellerId = req.params.sellerId;
  const query = { _id: sellerId };
  const update = {
    status: 'approved',
    isActive: true
  };
  const seller = await Seller.findOneAndUpdate(query, update, {
    new: true,
    validateBeforeSave: false
  }).populate(
    'createdBy',
    "firstName"
  );;
  const user = await User.findOne({ seller: sellerId })
  if (user) {
    user.isSeller = true
  }
  const updatedUser = await user.save();
  
  const message = `congratulations ${seller.createdBy.firstName} you have been accepted to sell on Drone Ship`;
  await sendEmail({
    email: seller.email,
    subject: `Seller request Approved`,
    message,
  });
  res.status(200).json({
    success: true,
    seller,
    updatedUser,
  });
})


// Seller Rejection
exports.rejectSeller = catchAsyncError(async (req, res, next) => {
  const sellerId = req.params.sellerId;
  const query = { _id: sellerId };
  const update = {
    status: 'rejected',
  };
  const seller = await Seller.findOneAndUpdate(query, update, {
    new: true
  }).populate(
    'createdBy',
    "firstName"
  );
    
  const message = `hello ${seller.createdBy.firstName} sorry to informe you that your request have been rejected` 
  await sendEmail({
    email: seller.email,
    subject: `Seller request rejected`,
    message,
  });
  res.status(200).json({
    success: true,
    seller,
  });
})

// Get all Sellers for Normal Users
exports.getAllSellers = catchAsyncError(async (req, res, next) => {
  const sellers = await Seller.find({ isActive: true });
  res.status(200).json({
    success: true,
    sellers,
    numOfSellers: sellers.length
  });

});

// Get all Sellers for admin Users
exports.getAllAdminSellers = catchAsyncError(async (req, res, next) => {
  const sellers = await Seller.find({});
  res.status(200).json({
    success: true,
    sellers,
    numOfSellers: sellers.length
  });
});

// Get Seller details
exports.getSellerDetails = catchAsyncError(async (req, res, next) => {
  const seller = await Seller.findById(req.params.id);
  if (seller) {
    res.status(200).json({
      success: true,
      seller,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Seller Not Found'
    });
  }
});

// Delete Seller --Admin
exports.deleteSeller = catchAsyncError(async (req, res, next) => {
  const seller = await Seller.findById(req.params.id);
  if (seller) {
    const deleteSeller = await seller.remove();

    res.send({ message: 'Seller Deleted', seller: deleteSeller });

  } else {
    res.status(404).send({ message: 'Seller Not Found' });

  }
});