const User = require("../models/user.model");
const Vehicle = require("../models/vehicle.model");
const {
  PORT,
  MONGODB_URI,
  NODE_ENV,
  ORIGIN,
  ADMIN_PHONE,
} = require("../config");
// const ADMIN_PHONE = 7218275153;

const {
  PHONE_NOT_FOUND_ERR,

  PHONE_ALREADY_EXISTS_ERR,
  USER_NOT_FOUND_ERR,
  INCORRECT_OTP_ERR,
  ACCESS_DENIED_ERR,
} = require("../errors");

// register car
exports.registerVehicle = async (req, res, next) => {
  try {
    let { carBrand, carModel, carType, carColor, userId } = req.body;

    const vehicleRegister = await Vehicle.create({
      carBrand,
      carModel,
      carType,
      carColor,
      userId,
    });

    const vehicle = await vehicleRegister.save();
    console.log(vehicle);

    res.status(200).json({
      type: "success",
      message: "Vehicle Register Succussefully",
      data: {
        vehicle,
      },
    });
  } catch (error) {
    next(error);
  }
};

// get all register car
exports.getAllCars = async (req, res, next) => {
  try {
    const getAllCars = await Vehicle.find({});

    res.status(200).json({
      type: "success",
      message: "Vehicle Register Succussefully",
      data: {
        getAllCars,
      },
    });
  } catch (error) {
    next(error);
  }
};

// get all cars of UserId
exports.getAllCarsByUserId = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const getAllCars = await Vehicle.find({ userId: userId });
    res.status(200).json({
      type: "success",
      message: "Vehicle Register Succussefully",
      data: {
        getAllCars,
      },
    });
  } catch (error) {
    next(error);
  }
};
