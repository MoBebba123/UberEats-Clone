const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    getAllUsers,
    updatePassword,
    updateProfile,
    deleteProfilePicture,
    getSingleUser,
    updateUserRole,
    deleteUser,
    getSellerRequest,
    sellerDetails
} = require("../controllers/userController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");


const router = express.Router();
router.route("/sellerDetails").get(isAuthenticatedUser,sellerDetails);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/profile").get(isAuthenticatedUser, getUserDetails);
router.route("/profile/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/admin/users").get(isAuthenticatedUser, isAdmin, getAllUsers);
router.route("/profilePicture/delete").put(isAuthenticatedUser, deleteProfilePicture);
router.route("/admin/user/:id")
.get(isAuthenticatedUser,isAdmin, getSingleUser)
.put(isAuthenticatedUser,isAdmin,updateUserRole)
.delete(isAuthenticatedUser,isAdmin, deleteUser);


module.exports = router;