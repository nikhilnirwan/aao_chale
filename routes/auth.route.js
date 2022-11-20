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
} = require("../controllers/auth.controller");

router.post("/createNewUser", createNewUser);

router.post("/login_with_phone", loginWithPhoneOtp);
router.post("/resendOTP", resendOTP);

router.post("/verify", verifyPhoneOtp);

router.get("/getUser", checkAuth, fetchCurrentUser);

module.exports = router;
