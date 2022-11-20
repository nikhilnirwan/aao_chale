const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// require("dotenv").config("config.env");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;
// const MONGODB_URI =
//   "mongodb+srv://rutujagaikwad:StartLazaa2022@cluster0.rcmoqkb.mongodb.net/aao_chale";
// const NODE_ENV = process.env || development;

const { NODE_ENV, ORIGIN, JWT_SECRET, ADMIN_PHONE } = require("./config");
const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require("./errors");

// routes
const authRoutes = require("./routes/auth.route");
const vehicleRoutes = require("./routes/vehicle.route");

// init express app
const app = express();

// middlewares

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
    optionsSuccessStatus: 200,
  })
);

// log in development environment

if (NODE_ENV == "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// index route

app.get("/", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

// routes middlewares

app.use("/api/auth", authRoutes);
app.use("/api/auth/vehicle", vehicleRoutes);

// page not found error handling  middleware

app.use("*", (req, res, next) => {
  const error = {
    status: 404,
    message: API_ENDPOINT_NOT_FOUND_ERR,
  };
  next(error);
});

// global error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

async function main() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("database connected");

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
