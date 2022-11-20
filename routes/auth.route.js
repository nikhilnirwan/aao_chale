const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const {
  createNewUser,
  loginWithPhoneOtp,
  verifyPhoneOtp,
  fetchCurrentUser,
  handleAdmin,
  resendOTP,
  // loginUser,
  // verifyOTP,
  // handleAdmin,
} = require("../controllers/auth.controller");
// router.use(checkAuth.protect);

router.post("/createNewUser", createNewUser);

router.post("/login_with_phone", loginWithPhoneOtp);
router.post("/resendOTP", resendOTP);

router.post("/verify", verifyPhoneOtp);

router.get("/me", checkAuth, fetchCurrentUser);

router.get("/admin", checkAuth, checkAdmin, handleAdmin);

module.exports = router;
