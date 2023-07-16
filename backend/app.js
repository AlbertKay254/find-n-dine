const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// connect to mongodb
require("./config").intializeDatabase();

// import env variables from .env file
require("dotenv").config();

// middleware
app.use(cors());
app.use(morgan("common"));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  console.log(req);
  next();
});

// define routes
app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/user.route"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/review"));
app.use("/api", require("./routes/restaurant"));

app.use(async (req, res, next) => {
  console.log("Not found");
  res.send("Check url");
});

module.exports = app;
