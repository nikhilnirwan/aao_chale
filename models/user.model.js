// const { model, Schema, default: mongoose } = require("mongoose");
const express = require("express");
const mongodb = require("mongoose");

const userSchema = new mongodb.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      // required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      // default: "USER",//
    },

    phoneOtp: String,
  },
  { timestamps: true }
);

const User = new mongodb.model("User", userSchema);
module.exports = User;
