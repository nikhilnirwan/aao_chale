const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const {
  registerVehicle,
  getAllCars,
  getAllCarsByUserId,
} = require("../controllers/vehicle.controller");

router.post("/registerVehicle", registerVehicle);
router.get("/getAllCars", getAllCars);
router.get("/getAllCarsByUserId", getAllCarsByUserId);

module.exports = router;
