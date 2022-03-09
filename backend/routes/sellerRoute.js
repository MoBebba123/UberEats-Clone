const express = require("express");
const { sellerRequest, approveSeller, rejectSeller, getAllSellers ,getAllAdminSellers, getSellerDetails, deleteSeller} = require("../controllers/sellerController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");

const router = express.Router();
router.route("/sellers").get(getAllSellers);
router.route("/seller/:id").get(getSellerDetails);
router.route("/seller-request").post(isAuthenticatedUser, sellerRequest);

router.route("/admin/seller/:id").delete(isAuthenticatedUser,isAdmin, deleteSeller);
router.route("/admin/sellers").get(isAuthenticatedUser,isAdmin,getAllAdminSellers);
router.route("/admin/seller/approve/:sellerId").put(isAuthenticatedUser,isAdmin, approveSeller);
router.route("/admin/seller/reject/:sellerId").put(isAuthenticatedUser,isAdmin, rejectSeller);


module.exports = router;