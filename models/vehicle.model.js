// const { model, Schema, default: mongoose } = require("mongoose");
const express = require("express");
const mongodb = require("mongoose");

const vehicleSchema = new mongodb.Schema(
  {
    carBrand: {
      type: String,
      required: true,
      trim: true,
    },
    carModel: {
      type: String,
      required: true,
      trim: true,
    },
    carType: {
      type: String,
      required: true,
      trim: true,
    },
    carColor: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongodb.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Vehicle = new mongodb.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
